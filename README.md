<!-- /* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

export const Timer = ({ onTimeUp }) => {
    const dataTime = localStorage.getItem('timer')
    const [time, setTime] = useState({
        minutes: dataTime ? JSON.parse(dataTime).minutes : 10,
        seconds: dataTime ? JSON.parse(dataTime).seconds : 0
    })
    const { minutes, seconds } = time

    useEffect(() => {
        const timer = setInterval(() => {
            seconds > 0 ? setTime(prev => ({ ...prev, seconds: prev.seconds - 1 })) :
            minutes > 0 ? setTime(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 })) :
            clearInterval(timer)
        }, 1000)

        minutes === 0 && seconds === 0 && onTimeUp({ minutes, seconds })
        localStorage.setItem('timer', JSON.stringify({ minutes, seconds }))

        return () => clearInterval(timer)
    },[minutes, seconds, onTimeUp])

    return (
    <h1 className='text-3xl font-semibold tracking-wide'>
        {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
    )
} -->

<!-- import { useContext, useEffect, useState } from 'react'
import { Button } from '../component/Button'
import { Timer } from '../component/Timer'
import { Loading } from '../component/Loading'
import { getDataAPI } from '../services/getDataAPI'
import { useNavigate } from 'react-router-dom'
import { TimerContext } from '../context/timer-context'

export const Quiz = () => {
  const data = localStorage.getItem('questions')
  const [questions, setQuestions] = useState(data ? JSON.parse(data).questions : [])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(data ? JSON.parse(data).currentQuestionIndex : 0)
  const [answer, setAnswer] = useState(data ? JSON.parse(data).answer : [])
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()
  const {onTimeUp} = useContext(TimerContext)

  // console.log(questions)

  useEffect(() => {
    getDataAPI()
    .then( data => setQuestions(data.results))
    .catch( err => console.log(err))
  }, [])

  useEffect(() => {
    onTimeUp && setIsComplete(true)
  },[onTimeUp])

  const currentQuestion = questions[currentQuestionIndex]
  const handleAnswerSelect = (answer) => {
      setAnswer(prev => [...prev, {selectedAnswer: answer, correctAnswer: currentQuestion.correct_answer}])
      currentQuestionIndex < questions.length - 1 ?  setCurrentQuestionIndex(currentQuestionIndex + 1) : setIsComplete(true)
  }

  // console.log(currentQuestion)

  let totalCorrectAnswer = 0
  answer.map( x => x.selectedAnswer == x.correctAnswer && totalCorrectAnswer++)

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify({questions, currentQuestionIndex, answer}))
  },[questions, currentQuestionIndex, answer])

  useEffect(() => {
    localStorage.removeItem('questions')
    localStorage.removeItem('timer')
    // localStorage.setItem('score', JSON.stringify({correctAnswer: totalCorrectAnswer, incorrectAnswer: (questions.length - totalCorrectAnswer), completlyAnswer: answer.length}))
  },[isComplete])
  // <ScorePage correctAnswer={totalCorrectAnswer} incorrectAnswer={(questions.length - totalCorrectAnswer)} completlyAnswer={answer.length} maxScore={questions.length} />

  return (
    <>
    {questions.length === 0 ? <Loading /> :
     isComplete ? navigate('/score') :
      <section id="quiz" className={`w-full h-full ${isComplete ? 'hidden' : 'flex'} flex-col gap-5`}>
        <div id="question" className='w-8/12 h-32 mx-auto text-center text-white rounded-lg bg-[#00b4d8] bg-pattern bg-blend-multiply shadow'>
          <span className='px-5 py-1 text-base text-white rounded-full bg-[#1D3557]'>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <p className='mt-4 text-lg font-semibold'>{currentQuestion.question}</p>
        </div>
        <div id="answer" className='grid grid-cols-2 gap-4 w-8/12 h-28 mx-auto text-center rounded-2xl'>
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort(() => Math.random() - .5).map((option, index) => (
          <Button key={index} onClick={() => handleAnswerSelect(option)}>{option}</Button>
        ))}
        </div>
        <section className='absolute flex justify-center items-center gap-5 left-1/2 bottom-5 w-52 py-1.5 text-white rounded-full bg-slate-500 translate-x-[-50%]'>
          <img src="/time.svg" alt="" className='w-10 h10' />
          <Timer />
        </section>
      </section>
    }
    </>
  )
} -->
