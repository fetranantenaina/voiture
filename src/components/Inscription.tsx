import React, { useState } from 'react';
import './Inscription.css';

interface ContainerProps {
    name: string;
}

const Inscription: React.FC<ContainerProps> = ({ name }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            firstname: username,
            lastname: '',
            email: email,
            password: password
        };

        fetch('https://ez-car-production.up.railway.app/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to register');
                }
                return response.json();
            })
            .then(data => {
                // Traitement des données de réponse si nécessaire
                console.log('User registered successfully:', data);
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e => setUsername(e.target.value)} />
                </p>
                <p>
                    <input type="email" placeholder="Adresse e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
                </p>
                <p>
                    <input type="submit" value="Inscrire" />
                </p>
            </form>
        </div>
    );
};

export default Inscription;
