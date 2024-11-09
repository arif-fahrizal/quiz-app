/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Membuat context baru
export const TimerContext = createContext();

export const DataProvider = ({ children }) => {
  const [onTimeUp, setOnTimeUp] = useState(false)

  return (
    <TimerContext.Provider value={{ onTimeUp, setOnTimeUp }}>
      {children}
    </TimerContext.Provider>
  )
}