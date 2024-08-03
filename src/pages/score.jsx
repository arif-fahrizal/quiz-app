/* eslint-disable react/prop-types */
import { Button } from "../component/Button"

export const Score = ({correctAnswer, incorrectAnswer, completlyAnswer, maxScore}) => {
  return (
  <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
    <h1 className="text-6xl font-semibold" >Your Score</h1>
    <section className="flex flex-col gap-2">
      <h2 className="flex justify-between gap-5 text-2xl font-semibold">Correct Answer<span className={`${correctAnswer >= 8 ? 'text-green-700' : correctAnswer >= 6 ? 'text-orange-400' : 'text-red-700'}`}> = {correctAnswer < 10 ? `0${correctAnswer}` : correctAnswer}  / {maxScore}</span> </h2>
      <h2 className="flex justify-between gap-5 text-2xl font-semibold">Incorrect Answer<span className={`${incorrectAnswer <= 2 ? 'text-green-700' : incorrectAnswer <= 4 ? 'text-orange-400' : 'text-red-700'}`} > = {incorrectAnswer < 10 ? `0${incorrectAnswer}` : incorrectAnswer}   / {maxScore}</span> </h2>
      <h2 className="flex justify-between gap-5 text-2xl font-semibold">Completly Answered<span className={`${completlyAnswer >= 8 ? 'text-green-700' : completlyAnswer >= 6 ? 'text-orange-400' : 'text-red-700'}`} > = {completlyAnswer < 10 ? `0${completlyAnswer}` : completlyAnswer}   / {maxScore}</span> </h2>
    </section>
    <Button onClick={() => {window.location.reload()}}>Start Again</Button>
  </div>
  )
}
