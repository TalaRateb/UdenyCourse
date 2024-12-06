// src/components/Login.js
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'; // Ensure this hook interacts with Firebase Auth
import styles from './Login.module.css'; // Ensure this path is correct

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin(); // Using the custom hook

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); // Call the login function from the hook
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          required // Ensures the email field is not empty
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          required // Ensures the password field is not empty
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <p className={styles.error}>{error}</p>} {/* Added a class for potential styling */}
    </form>
  );
}