/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Membuat context baru
export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState({
      username: '',
      email: '',
      password: ''
  });

  const registerAccount = (newAccount) => {
      setAccount(newAccount);
  };

  return (
      <AccountContext.Provider value={{ account, registerAccount }}>
          {children}
      </AccountContext.Provider>
  );
};