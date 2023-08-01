import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useContext(AppContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), 
      });

      if (!response.ok) {
        throw new Error('Failed to register'); 
      }

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        navigate('/email-confirmation');
      } else {
        throw new Error('Token not received'); 
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };


  return (
    <div>
      <h1>Registrasi</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
