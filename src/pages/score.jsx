/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { Button } from "../component/Button"
import { ContainerLayout } from "../layouts/Container-layout"

export const ScorePage = () => {
  const score = localStorage.getItem('index') ?  (JSON.parse(localStorage.getItem('index')).answers ): []

  const  scors = { correctAnswer: 0, incorrectAnswer: 0, completlyAnswer: score.length }
  score.map( x => x.selectedAnswer == x.correctAnswer ? scors.correctAnswer++ : scors.incorrectAnswer++ )

  const { correctAnswer, incorrectAnswer, completlyAnswer } = scors

  const navigate = useNavigate()

  return (
    <ContainerLayout>
      <div className="flex flex-col items-center gap-5 mx-auto text-black sm:w-96">
        <h1 className="text-xl font-semibold" >Your Final Score is</h1>
        <span className={`px-7 py-3 text-6xl text-white font-bold rounded-xl ${correctAnswer >= 8 ? 'bg-green-400' : correctAnswer >= 6 ? 'bg-orange-400' : 'bg-red-700'}`}>{correctAnswer ? correctAnswer * 10 : 0}</span>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Correct Answer </span>
            <span className={`text-lg font-semibold ${correctAnswer >= 8 ? 'text-green-700' : correctAnswer >= 6 ? 'text-orange-400' : 'text-red-700'}`}>{correctAnswer ? correctAnswer : 0}</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Wrong Answer </span>
            <span className={`text-lg font-semibold ${incorrectAnswer <= 2 ? 'text-green-700' : incorrectAnswer <= 4 ? 'text-orange-400' : 'text-red-700'}`} >{incorrectAnswer ? incorrectAnswer : 0}</span> 
          </div>
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Answer Submitted</span>
            <span className={`text-lg font-semibold ${completlyAnswer >= 8 ? 'text-green-700' : completlyAnswer >= 6 ? 'text-orange-400' : 'text-red-700'}`} >{completlyAnswer ? completlyAnswer : 0}</span>
          </div>
        </div>
        <Button onClick={() => 
          // navigate('/')
          navigate('/trivia-app/')
        }>Back to Dashboard</Button>
      </div>
    </ContainerLayout>
  )
}


// = {correctAnswer < 10 ? `0${correctAnswer}` : correctAnswer}  / {maxScore}
