/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { Button } from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { Quiz } from './quiz'
import { ContainerLayout } from '../layouts/Container-layout'
import { DataContext, TimerContext } from '../context/context'

export const Home = () => {
  const {setOnTimeUp} = useContext(TimerContext)
  const {setIsLoading} = useContext(DataContext)
  const [startQuiz, setStartQuiz] = useState(false)

  const dataAccount = JSON.parse(localStorage.getItem('dataAccount')) || [{username: '', isLogin: false}]
  const [{ username, isLogin }] = dataAccount.filter(data => data.isLogin === true).length > 0 ? dataAccount.filter(data => data.isLogin === true) : dataAccount
  // console.log(dataAccount.filter(data => data.isLogin === true) || dataAccount)

  const navigate = useNavigate()

  const handleQuiz = (e) => {
    setIsLoading(true)
    isLogin ? (setStartQuiz(true), setOnTimeUp(false), setInterval(() => setIsLoading(false), 5000)) : 
    // navigate('/login')
    navigate('/trivia-app/login')
    e.preventDefault()
  }
  
  return (
    <ContainerLayout>
      {startQuiz ? <Quiz /> : 
      <div className='flex flex-col-reverse justify-center items-center gap-5 w-full h-3/4 text-black sm:h-4/5 lg:flex-row lg:h-2/3'>
        <section id="home" className='w-full text-center'>
          <h1 className='mb-5 text-3xl font-bold text-center capitalize sm:text-4xl'>{isLogin ? `Hallo "${username}"` : 'Welcome to Trivia App'}</h1>
          <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat accusantium aperiam dolor corrupti dignissimos consequuntur eos distinctio nihil quod. Iste aut ea voluptas itaque?</p>
          <Button onClick={handleQuiz}>Start Quiz</Button>
        </section>
        <div className='w-full bg-blue-00'>
          <img src="./sun-logo.svg" alt="" className='w-40 h-40 mx-auto mb-5 object-contain sm:w-52 sm:h-5w-52 lg:w-60 lg:h-60' />
          <h1 className='text-center text-3xl font-bold sm:text-4xl'><span className='text-[#00b4d8]'>{`Oxlade`}</span> Trivia App</h1>
        </div>
      </div>
      }
    </ContainerLayout>
  )
}
