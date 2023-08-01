import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { AppProvider } from './context/AppContext';
import Register from './components/Register';
import EmailConfirmation from './components/EmailConfirmation';
import './App.css'

const App = () => {
  const registerUser = async (user) => {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.token) {
        return data.token;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error registering user:', error);
      return null;
    }
  };

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Register registerUser={registerUser} />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;