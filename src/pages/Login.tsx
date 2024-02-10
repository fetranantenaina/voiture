import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleLogin = async () => {
    try {
      const response = await fetch('http://vaika-ws-production.up.railway.app/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Authentication successful");

        localStorage.setItem('accessToken', responseData.access_token);

        history.push('/dashboard');
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);

    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Login Page</h1>
        <div className="input-group">
          <input type="email" placeholder="Nom d'utilisateur" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-group">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
