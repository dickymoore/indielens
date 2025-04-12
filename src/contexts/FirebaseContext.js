// src/contexts/FirebaseContext.js
import React, { createContext } from 'react';
import { auth, db } from '../firebaseConfig';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};
