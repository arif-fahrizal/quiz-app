import { useState, useRef, useEffect } from 'react'

export const TimerComponent = () => {
  const [count, setCount] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  useEffect(() => {
    return () => clearInterval(timerRef.current) // Cleanup on unmount
  }, [])

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

