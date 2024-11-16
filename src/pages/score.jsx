/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { Button } from "../component/Button"
import { ContainerLayout } from "../layouts/Container-layout"

export const ScorePage = () => {
  const getAllAnswer = localStorage.getItem('quizProgress') ? JSON.parse(localStorage.getItem('quizProgress')).answers : []
  const navigate = useNavigate()

  let correctAnswer = 0
  let incorrectAnswer = 0
  const completlyAnswer = getAllAnswer.length

  // Menghitung jumlah jawaban yang benar dan salah
  getAllAnswer.forEach( answer => answer.selectedAnswer === answer.correctAnswer ? correctAnswer++ : incorrectAnswer++ )

  // Fungsi untuk menentukan kelas berdasarkan kondisi
  const getScoreClass = (score, thresholds) => {
    if (score >= thresholds[0]) return 'bg-green-400'
    if (score >= thresholds[1]) return 'bg-orange-400'
    return 'bg-red-700 text-red-700'
  }


  return (
    <ContainerLayout>
      <div className="flex flex-col items-center gap-5 mx-auto mt-16 text-black sm:w-96">
        <h1 className="text-xl font-semibold">Your Final Score</h1>
        <span className={`px-7 py-3 text-6xl text-white font-bold rounded-xl ${getScoreClass(correctAnswer, [8, 6])}`}> {correctAnswer * 10 || 0} </span>
        <div className="grid gap-1 w-full">
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Correct Answer</span>
            <span className={`w-7 text-lg text-center text-white font-semibold rounded-md ${getScoreClass(correctAnswer, [8, 6])}`}> {correctAnswer || 0} </span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Wrong Answer</span>
            <span className={`w-7 text-lg text-center text-white font-semibold rounded-md ${incorrectAnswer <= 2 ? 'bg-green-700' : incorrectAnswer <= 4 ? 'bg-orange-400' : 'bg-red-700'}`}> {incorrectAnswer || 0} </span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-lg font-medium">Answer Submitted</span>
            <span className={`w-7 text-lg text-center text-white font-semibold rounded-md ${getScoreClass(completlyAnswer, [8, 6])}`}> {completlyAnswer || 0} </span>
          </div>
        </div>
        <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
      </div>
    </ContainerLayout>
  )
}
