import { useContext, useEffect, useMemo, useState } from 'react'
import { Timer } from '../component/Timer'
import { Loading } from '../component/Loading'
import { useNavigate } from 'react-router-dom'
import { TimerContext } from '../context/context'
import { useFetch } from '../services/useFetch'

export const Quiz = () => {
  const { data, loading, error } = useFetch()
  const { onTimeUp } = useContext(TimerContext)

  const dataAccount = JSON.parse(localStorage.getItem('dataAccount')) || []
  const isLogin = dataAccount.some(data => data.isLogin) || false


  const dataLocal = JSON.parse(localStorage.getItem('index'))
  const [index, setIndex] = useState(dataLocal ? dataLocal.index : 0)
  const [questions, setQuestions] = useState()
  const [answers, setAnswers] = useState(dataLocal && dataLocal.index >= 1 ? dataLocal.answers : [])
  const [isComplete, setIsComplete] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    !isLogin && navigate('/login')
  }, [isLogin, navigate])

  useEffect(() => {
    !loading && setQuestions(data[index])
  }, [data, index, loading])
  
  const optionAnswer = useMemo(() => {
    return questions && [questions.correct_answer, ...questions.incorrect_answers].sort(() => Math.random() - .5)
  }, [questions])

  const handleAnswer = answer => {
    setAnswers(prev => [...prev, { selectedAnswer: answer, correctAnswer: questions.correct_answer }])
    index < data.length - 1 ? (setIndex(index + 1), setQuestions(data[index + 1])) : setIsComplete(true)
  }

  useEffect(() => {
    !loading && (localStorage.setItem('index', JSON.stringify({ index, answers })), localStorage.setItem('questions', JSON.stringify(data)))
  }, [loading, data, index, answers])

  useEffect(() => {
    onTimeUp || isComplete ?
      (navigate('/score'),
      localStorage.removeItem('questions'), localStorage.removeItem('timer'), localStorage.setItem('index', JSON.stringify({ index: 0, answers }))) : null
  }, [onTimeUp, isComplete, answers, navigate])

  if (loading) return <Loading />
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
    {questions && 
    <div className='container-layout'>
      <section id="quiz" className='grid gap-5 w-full sm:mt-10'>
        <div id="question" className='w-full h-28 mx-auto text-center text-white rounded-lg bg-[#112A4E] bg-pattern bg-blend-multiply shadow lg:w-9/12'>
          <span className='px-5 py-1 text-base text-white rounded-full bg-[#1D3557]'>Question {index + 1} of {data.length}</span>
          <p className='mt-4 px-2 text-sm font-semibold select-none sm:text-lg'>{questions.question}</p>
        </div>
        <ul id="answer" className='grid gap-4 w-full mx-auto text-center rounded-2xl sm:grid-cols-2 lg:w-9/12'>
          {optionAnswer.map((option, index) => (
            <li key={index} onClick={() => handleAnswer(option)} className='flex justify-center items-center w-full p-2 text-sm font-medium text-white rounded-lg bg-[#112A4E] cursor-pointer select-none hover:bg-[#0d213e]'>{option}</li>
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
