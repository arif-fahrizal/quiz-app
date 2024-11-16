/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { ContainerLayout } from '../layouts/Container-layout'

export const Home = () => {
  const dataAccount = JSON.parse(localStorage.getItem('dataAccount'))
  const { username = '', isLogin = false } = dataAccount.find(data => data.isLogin === true) || {}
  const navigate = useNavigate()

  const handleQuiz = (e) => {
    navigate(isLogin ? '/quiz' : '/login')
    e.preventDefault()
  }
  
  return (
    <ContainerLayout>
      <div className='flex flex-col-reverse justify-center items-center gap-5 w-full text-black sm:h-4/5 lg:flex-row'>
        <section id="home" className='w-full text-center mb-5 sm:mb-0'>
          <h1 className='mb-5 text-3xl font-bold text-center capitalize sm:text-4xl'>{isLogin ? `Hallo "${username}"` : 'Welcome to Trivia App Mastery'}</h1>
          <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat accusantium aperiam dolor corrupti dignissimos consequuntur eos distinctio nihil quod. Iste aut ea voluptas itaque?</p>
          <Button onClick={handleQuiz}>Start Quiz</Button>
        </section>
        <div className='w-full bg-white'>
          <img src="./brain-bolt.png" alt="" className='size-40 mx-auto mb-5 rounded-full object-contain sm:size-52 lg:size-80' />
          <h1 className='font-audiowide text-center text-3xl font-bold sm:text-4xl'><span className='font-audiowide text-[#00b4d8]'>BRAIN</span>-BOLT</h1>
        </div>
      </div>
    </ContainerLayout>
  )
}
