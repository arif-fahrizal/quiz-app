import axios from 'axios'

export const getDataAPI = () => {
  return (
    axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    .then(res => res.data)
    .catch(err => console.log(err))
  )
}
