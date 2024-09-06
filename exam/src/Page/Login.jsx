import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase.config'; // Assuming you have your Firebase configuration here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Logged in user:', user);
        // You can redirect the user or perform other actions here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`Login failed: ${errorMessage}`);
      });
  };

  return (
    <div className="login-container">
      <div className="background-shapes">
        <div className="circle large"></div>
        <div className="circle small"></div>
        <div className="wave"></div>
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="options">
          <a href="/forgot-password">Forgot Password?</a> | 
          <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
