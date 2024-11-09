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
    const { onTimeUp, setOnTimeUp } = useContext(TimerContext)

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setTime(prev => ({ ...prev, seconds: prev.seconds - 1 }))
            } else if (minutes > 0) {
                setTime(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }))
            }
        }, 1000)
        
        localStorage.setItem('timer', JSON.stringify({ minutes, seconds }))
        minutes === 0 && seconds === 0 && (setOnTimeUp(!onTimeUp), localStorage.removeItem('timer'))

        return () => clearInterval(timer)
    },[minutes, seconds, onTimeUp, setOnTimeUp])

    return (
    <h1 className='text-lg sm:text-3xl font-semibold tracking-wide'>
        {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, "0")}
    </h1>
    )
}
