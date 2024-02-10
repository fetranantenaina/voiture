import './ListeAnnonce.css';
import React, { useState } from 'react';

interface ContainerProps {
    name: string;
}

const ListeAnnonce: React.FC<ContainerProps> = ({ name }) => {
    const [annonces, setAnnonces] = useState<any[]>([]);

    const handleButtonClick = () => {
        // Récupérer le token depuis le localStorage
        const token = localStorage.getItem('token');

        // Vérifier si le token est présent
        if (token) {
            // Effectuer la requête avec le token
            fetch('https://vaika-ws-production.up.railway.app/v1/annonces', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch data');
                    }
                })
                .then(data => {
                    setAnnonces(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            console.error('Token not found in localStorage');
        }
    };

    return (
        <div className="container">
            <p>
                Liste Annonce
                <button className="submit-button" onClick={handleButtonClick}>
                    Voir Annonces
                </button>
            </p>
            {/* Afficher les annonces ici */}
            <ul>
                {annonces.map((annonce, index) => (
                    <li key={index}>{annonce}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListeAnnonce;
