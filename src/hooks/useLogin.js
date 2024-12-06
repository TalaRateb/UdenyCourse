// src/hooks/useLogin.js
import { useState } from 'react';
import { auth } from '../firebase/config'; // Import the auth object from config
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the auth method

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password); // Use Firebase login method

      if (!res.user) {
        throw new Error('Could not complete login');
      }
      window.location.href = 'https://central.zapier.com/copy/504e5e84-c85f-4625-be1e-fed966b4b71b';

      // Optionally handle successful login (e.g., redirect, set user state)
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};