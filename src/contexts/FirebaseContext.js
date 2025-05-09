// src/contexts/FirebaseContext.js
import React, { createContext } from 'react';
import { auth, db } from '../firebaseConfig';

export const FirebaseContext = createContext();

function isFirebaseConfigValid() {
  const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
  } = process.env;
  return (
    REACT_APP_FIREBASE_API_KEY &&
    REACT_APP_FIREBASE_AUTH_DOMAIN &&
    REACT_APP_FIREBASE_PROJECT_ID &&
    REACT_APP_FIREBASE_STORAGE_BUCKET &&
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID &&
    REACT_APP_FIREBASE_APP_ID
  );
}

export const FirebaseProvider = ({ children }) => {
  if (!isFirebaseConfigValid()) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Firebase Configuration Error</h1>
        <p>
          One or more Firebase environment variables are missing. Please ensure you have set:
          <br />
          REACT_APP_FIREBASE_API_KEY
          <br />
          REACT_APP_FIREBASE_AUTH_DOMAIN
          <br />
          REACT_APP_FIREBASE_PROJECT_ID
          <br />
          REACT_APP_FIREBASE_STORAGE_BUCKET
          <br />
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID
          <br />
          REACT_APP_FIREBASE_APP_ID
        </p>
      </div>
    );
  }

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};
