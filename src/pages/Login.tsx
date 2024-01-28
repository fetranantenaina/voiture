import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Inscription from '../components/Inscription';// Importez le composant Inscription
import './Login.css';

const Login: React.FC = () => {
    const { login } = useAuth();
    const history = useHistory();
    const [showLogin, setShowLogin] = useState(true); // Ajout de la variable d'état

    const handleLogin = () => {
        // Logique d'authentification simulée (par exemple, définir isAuthenticated sur true)
        console.log("Simulating successful authentication");
        login();

        // Rediriger vers la page du tableau de bord après l'authentification réussie
        history.push('/dashboard');
    };

    const handleSwitch = () => {
        // Inverser la valeur de showLogin lorsqu'on clique sur le bouton "Inscription"
        setShowLogin(!showLogin);
    };
/*
  return (
    <div className="container">
      <div className="form">
        <h1>{showLogin ? 'Login' : 'Inscription'}</h1>
        <div className="input-group">
          <input type="text" placeholder="Nom d'utilisateur" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="button-group">
          <button className="login-btn" onClick={handleLogin}>
            {showLogin ? 'Login' : 'Inscription'}
          </button>
          <button className="switch-btn" onClick={handleSwitch}>
            {showLogin ? 'Inscription' : 'Retour à Login'}
          </button>
        </div>
      </div>
    </div>
  ); */
    return (
        <div className="container">
            <div className="form">
            <h1>{showLogin ? 'Login Page' : 'Inscription Page'}</h1>
            {showLogin ? (
                <>
                    <div className="input-group">
                        <input type="text" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Mot de passe" />
                    </div>
                    <div className="button-group">
                    <button onClick={handleLogin}>Login</button>
                    </div>
                </>
            ) : (
                // Afficher le composant Inscription lorsque showLogin est false
                <Inscription name='inscription'/>
            )}
            <p>
                {/* Bouton pour basculer entre Login et Inscription */}
                <button onClick={handleSwitch}>
                    {showLogin ? 'Inscription' : 'Retour à Login'}
                </button>
            </p>
        </div>
        </div>
    );
};

export default Login;