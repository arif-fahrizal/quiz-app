import { useEffect, useState } from 'react'
import { Button } from '../component/Button'
import { Timer } from '../component/Timer'
import { Loading } from '../component/Loading'
import { getDataAPI } from '../services/getDataAPI'
import { Score } from './score'

export const Quiz = () => {
  const data = localStorage.getItem('questions')
  const [questions, setQuestions] = useState(data ? JSON.parse(data).questions : [])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(data ? JSON.parse(data).currentQuestionIndex : 0)
  const [answer, setAnswer] = useState(data ? JSON.parse(data).answer : [])
  const [isComplete, setIsComplete] = useState(false)

  console.log(data)

  useEffect(() => {
    getDataAPI()
    .then( data => setQuestions(data.results))
    .catch( err => console.log(err))
  }, [])

  const handleTimeUp = () => setIsComplete(true)
  
  const currentQuestion = questions[currentQuestionIndex]  
  const handleAnswerSelect = (answer) => {
      setAnswer(prev => [...prev, {selectedAnswer: answer, correctAnswer: currentQuestion.correct_answer}])
      currentQuestionIndex < questions.length - 1 ?  setCurrentQuestionIndex(currentQuestionIndex + 1) : setIsComplete(true)
  }

  let totalCorrectAnswer = 0
  answer.map( x => x.selectedAnswer == x.correctAnswer ? totalCorrectAnswer += 1 : totalCorrectAnswer += 0)

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify({questions, currentQuestionIndex, answer}))
  },[questions, currentQuestionIndex, answer])

  useEffect(() => {
    localStorage.removeItem('questions')
    localStorage.removeItem('timer')
  },[isComplete])

  return (
    <>
    {questions.length === 0 ? <Loading /> :
     isComplete ? <Score correctAnswer={totalCorrectAnswer} incorrectAnswer={(questions.length - totalCorrectAnswer)} completlyAnswer={answer.length} maxScore={questions.length} /> :
      <section id="quiz" className={`w-full h-auto ${isComplete ? 'hidden' : 'flex'} flex-col gap-10`}>
        <div id="question" className='w-7/12 h-auto mx-auto px-2 py-2 text-center font-semibold rounded-2xl bg-custom-radial'>
          <h1 className='text-xl text-white '>{currentQuestionIndex + 1} / {questions.length}</h1>
          <h1 className='text-xl text-white '>{currentQuestion.question}</h1>
        </div>
        <div id="answer" className='grid grid-cols-2 gap-4 w-7/12 h-32 mx-auto px-2 py-2 text-center rounded-2xl'>
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort(() => Math.random() - .5).map((option, index) => (
          <Button key={index} onClick={() => handleAnswerSelect(option)}>{option}</Button>
        ))}
        </div>
        <section className='absolute right-0 left-0 bottom-10 text-center'>
          <Timer onTimeUp = {handleTimeUp} />
        </section>
      </section>
    }
    </>
  )
}
