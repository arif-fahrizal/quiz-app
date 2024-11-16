import { useContext, useEffect, useMemo, useState } from 'react'
import { Timer } from '../component/Timer'
import { Loading } from '../component/Loading'
import { useNavigate } from 'react-router-dom'
import { TimerContext } from '../context/context'
import { useFetch } from '../services/useFetch'

export const Quiz = () => {
  const { dataQuestions, loading, error } = useFetch()
  const { onTimeUp } = useContext(TimerContext)

  const navigate = useNavigate()
  const getDataAccount = JSON.parse(localStorage.getItem('dataAccount')) || []
  const isLogin = getDataAccount.some(data => data.isLogin) || false

  const storedProgress = JSON.parse(localStorage.getItem('quizProgress')) || { currentQuestionIndex: 0, answers: [] }
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: storedProgress.currentQuestionIndex,
    selectedAnswers: storedProgress.answers > 0 ? storedProgress.answers : [],
    currentQuestion: null,
    isQuizComplete: false,
  })
  
  const { currentQuestionIndex, selectedAnswers, currentQuestion, isQuizComplete } = quizState
  
  // Redirect if not logged in
  useEffect(() => {
    !isLogin && navigate('/login')
  }, [isLogin, navigate])
  
  // Update the current question
  useEffect(() => {
    if (!loading) {
      setQuizState( prevState => ({
        ...prevState,
        currentQuestion: dataQuestions[currentQuestionIndex],
      }))
    }
  }, [dataQuestions, currentQuestionIndex, loading])
  
  // Randomize the answer options
  const shuffledAnswers = useMemo(() => {
    return currentQuestion && [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers].sort(() => Math.random() - 0.5)
  }, [currentQuestion])

  // Handle answer selection
  const handleAnswerSelection = (answer) => {
    const updatedAnswers = [...selectedAnswers, { selectedAnswer: answer, correctAnswer: currentQuestion.correct_answer }]

    if (currentQuestionIndex < dataQuestions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: currentQuestionIndex + 1,
        currentQuestion: dataQuestions[currentQuestionIndex + 1],
        selectedAnswers: updatedAnswers,
      })
    } else {
      setQuizState({
        ...quizState,
        isQuizComplete: true,
        selectedAnswers: updatedAnswers,
      })
    }
  }

  // Save progress to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("quizProgress", JSON.stringify({ currentQuestionIndex, answers: selectedAnswers }))
      localStorage.setItem("questions", JSON.stringify(dataQuestions))
    }
  }, [loading, currentQuestionIndex, selectedAnswers, dataQuestions])

   // Handle timer expiration or quiz completion
   useEffect(() => {
    if (onTimeUp || isQuizComplete) {
      navigate("/score")
      localStorage.removeItem("questions")
      localStorage.removeItem("timer")
      localStorage.setItem("quizProgress", JSON.stringify({ currentQuestionIndex: 0, answers: selectedAnswers }))
    }
  }, [onTimeUp, selectedAnswers, isQuizComplete, navigate])

  if (loading) return <Loading />
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
    {currentQuestion && 
    <div className='container-layout'>
      <section id="quiz" className='grid gap-5 w-full sm:mt-10'>
        <div id="question" className='w-full h-28 mx-auto text-center text-white rounded-lg bg-[#112A4E] bg-pattern bg-blend-multiply shadow lg:w-9/12'>
          <span className='px-5 py-1 text-base text-white rounded-full bg-[#1D3557]'>Question {currentQuestionIndex + 1} of {dataQuestions.length}</span>
          <p className='mt-4 px-2 text-sm font-semibold select-none sm:text-lg'>{currentQuestion.question}</p>
        </div>
        <ul id="answer" className='grid gap-4 w-full mx-auto text-center rounded-2xl sm:grid-cols-2 lg:w-9/12'>
          {shuffledAnswers.map((option, index) => (
            <li key={index} onClick={() => handleAnswerSelection(option)} className='flex justify-center items-center w-full p-2 text-sm font-medium text-white rounded-lg bg-[#112A4E] cursor-pointer select-none hover:bg-[#0d213e]'>{option}</li>
          ))}
        </ul>
        <section className='absolute left-1/2 bottom-3 transform -translate-x-1/2 flex justify-center items-center gap-5 w-52 py-1.5 text-white rounded-full bg-[#112A4E]'>
          <img src="./time.svg" alt="" className='w-10 h10' />
          <Timer />
        </section>
      </section>
    </div>
    }
    </>
  )
}