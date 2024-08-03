/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

export const Timer = ({ onTimeUp }) => {
    const dataTime = localStorage.getItem('timer')
    const [time, setTime] = useState({
        minutes: dataTime ? JSON.parse(dataTime).minutes : 0,
        seconds: dataTime ? JSON.parse(dataTime).seconds : 10
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
        {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
    )
}
