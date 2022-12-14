import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthCotextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthCotextProvider>
        <App />
      </AuthCotextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

