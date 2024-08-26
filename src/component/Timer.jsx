/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/context'

export const Timer = () => {
    const dataTime = localStorage.getItem('timer')
    const [time, setTime] = useState({
        minutes: dataTime ? JSON.parse(dataTime).minutes : 10,
        seconds: dataTime ? JSON.parse(dataTime).seconds : 0
    })
    const { minutes, seconds } = time
    const {setOnTimeUp} = useContext(TimerContext)

    useEffect(() => {
        const timer = setInterval(() => {
            seconds > 0 ? setTime(prev => ({ ...prev, seconds: prev.seconds - 1 })) :
            minutes > 0 ? setTime(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 })) : 
            clearInterval(timer)
        }, 1000)
        
        localStorage.setItem('timer', JSON.stringify({ minutes, seconds }))
        minutes === 0 && seconds === 0 && (setOnTimeUp(true), localStorage.removeItem('timer'))

        return () => clearInterval(timer)
    },[minutes, seconds, setOnTimeUp])
    
    return (
    <h1 className='text-3xl font-semibold tracking-wide'>
        {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
    )
}
