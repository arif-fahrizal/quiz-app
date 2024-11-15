import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [dataQuestions, setDataQuestions] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const fetchDataQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
      setDataQuestions(response.data.results)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    const storedQuestions = localStorage.getItem('questions')

    const delayToGetData = setTimeout(() => {
      if (storedQuestions) {
        setDataQuestions(JSON.parse(storedQuestions))
        setLoading(false)
      } else {
        fetchDataQuestions()
      }
    }, 1000)

    return () => clearTimeout(delayToGetData)    
  }, [])
  
  return { dataQuestions, loading, error }
}
