// Inscription.tsx

import React from 'react';
import './Inscription.css';

interface ContainerProps {
    name: string;
}

const Inscription: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <form>
                <p>
                    <input type="text" placeholder="Nom d'utilisateur" />
                </p>
                <p>
                    <input type="email" placeholder="Adresse e-mail" />
                </p>
                <p>
                    <input type="password" placeholder="Mot de passe" />
                </p>
                <p>
                    <input type="submit" value="Inscrire" />
                </p>
            </form>
        </div>
    );
};

export default Inscription;
