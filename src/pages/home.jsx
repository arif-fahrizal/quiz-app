/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button } from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { Quiz } from './quiz'

export const Home = () => {
    const [name, setName] = useState(localStorage.getItem('name') && JSON.parse(localStorage.getItem('name')) || '')
    const [startQuiz, setStartQuiz] = useState(false)

    const navigate = useNavigate()

    const handleQuiz = (e) => {
        name ? setStartQuiz(true) : navigate('/login')
        e.preventDefault()
    }
    
    return (
        <div className='grid place-items-center w-full h-screen bg-custom-radial'>
            <section className='relative w-10/12 h-5/6 px-2 py-2 rounded-xl bg-white'>
                {startQuiz ? <Quiz /> : <section id="home" className='flex flex-col justify-center items-center gap-10 w-full h-full'>
                    <h1 className='text-5xl font-bold text-center'>Welcome to the Quiz App <span className='text-[#DA0FB7]'>{name + '!'}</span></h1>
                    <Button onClick={handleQuiz}>Start Quiz</Button>
                </section>}
            </section>
        </div>
    )
}
