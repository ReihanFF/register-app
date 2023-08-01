import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const EmailConfirmation = () => {
  const { token } = useContext(AppContext);

  return (
    <div>
      <h1>Konfirmasi</h1>
      <p>Registrasi berhasil ini token anda: {token}</p>
    </div>
  );
};

export default EmailConfirmation;
