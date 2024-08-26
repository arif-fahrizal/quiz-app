import { useContext, useEffect, useMemo, useState } from 'react'
import { Timer } from '../component/Timer'
import { Loading } from '../component/Loading'
import { useNavigate } from 'react-router-dom'
import { DataContext, TimerContext } from '../context/context'

export const Quiz = () => {
  const { data, isLoading } = useContext(DataContext)
  const { onTimeUp } = useContext(TimerContext)

  const dataLocal = JSON.parse(localStorage.getItem('index'))
  const [index, setIndex] = useState(dataLocal ? dataLocal.index : 0)
  const [questions, setQuestions] = useState(data[index])
  const [answers, setAnswers] = useState(dataLocal && dataLocal.index >= 1 ? dataLocal.answers : [])
  const [isComplete, setIsComplete] = useState(false)

  const navigate = useNavigate()

  const optionAnswer = useMemo(() => {
    return [questions.correct_answer, ...questions.incorrect_answers].sort(() => Math.random() - .5)
  }, [questions])

  const handleAnswer = answer => {
    setAnswers(prev => [...prev, { selectedAnswer: answer, correctAnswer: questions.correct_answer }])
    index < data.length - 1 ? (setIndex(index + 1), setQuestions(data[index + 1])) : setIsComplete(true)
  }

  useEffect(() => {
    localStorage.setItem('index', JSON.stringify({ index, answers }))
    localStorage.setItem('questions', JSON.stringify(data))
  }, [data, index, answers])

  useEffect(() => {
    onTimeUp || isComplete ?
      // (navigate('/score'),
      (navigate('/trivia-app/score'),
      localStorage.removeItem('questions'), localStorage.removeItem('timer'), localStorage.setItem('index', JSON.stringify({ index: 0, answers }))) : null
  }, [onTimeUp, isComplete, answers, navigate])

  return (
    <>
      {isLoading ? <Loading /> :
        <section id="quiz" className='grid gap-5 w-full h-96 mt-16'>
          <div id="question" className='w-full h-28 mx-auto text-center text-white rounded-lg bg-[#112A4E] bg-pattern bg-blend-multiply shadow lg:w-8/12'>
            <span className='px-5 py-1 text-base text-white rounded-full bg-[#1D3557]'>Question {index + 1} of {data.length}</span>
            <p className='mt-4 px-2 text-sm font-semibold sm:text-lg'>{questions.question}</p>
          </div>
          <ul id="answer" className='flex flex-wrap justify-center gap-4 w-full mx-auto text-center rounded-2xl sm:justify-between lg:w-8/12'>
            {optionAnswer.map((option, index) => (
              <li key={index} onClick={() => handleAnswer(option)} className='flex justify-center items-center w-full sm:w-60 lg:w-64 xl:w-80 py-3 text-sm font-medium text-white rounded-lg bg-[#112A4E] cursor-pointer hover:bg-[#0d213e]'>{option}</li>
            ))}
          </ul>
          <section className='flex justify-center items-center gap-5 left-1/2 w-52 py-1.5 mx-auto mt-16 sm:mt-60 text-white rounded-full bg-[#112A4E]'>
            <img src="./time.svg" alt="" className='w-10 h10' />
            <Timer />
          </section>
        </section>}
    </>
  )
}
