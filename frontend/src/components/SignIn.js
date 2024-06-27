import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Folder.css'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signin', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/booking');
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="signin">
      <h1>Sign In!...</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='button' type="submit">Sign In</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignIn;