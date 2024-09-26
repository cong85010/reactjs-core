import Container from '@/hoc/Container';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Component = function LoginPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate login API request
    const token = await fakeAuthAPI(username, password);

    if (token) {
      localStorage.setItem('token', token); // Store token in localStorage
      navigate('/admin'); // Redirect to admin dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  const fakeAuthAPI = (username: string, password: string) => {
    // Replace this with a real API request to authenticate the user
    if (username === 'admin' && password === 'password') {
      return Promise.resolve('fake-jwt-token');
    }
    return Promise.resolve(null);
  };

  return (
    <Container title="Login" description="Login page">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Container>
  );
};
