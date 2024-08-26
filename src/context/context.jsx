/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { getDataAPI } from '../services/getDataAPI';

// Membuat context baru
export const TimerContext = createContext();
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()
  const [onTimeUp, setOnTimeUp] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.getItem('questions') ?
    setData(JSON.parse(localStorage.getItem('questions'))) :
    getDataAPI()
    .then( data => setData(data.results))
    .catch( err => console.log(err))
  }, [])

  return (
    <DataContext.Provider value={{ data, setData, isLoading, setIsLoading }}>
      <TimerContext.Provider value={{ data, onTimeUp, setOnTimeUp }}>
        {children}
      </TimerContext.Provider>
    </DataContext.Provider>
  )
}