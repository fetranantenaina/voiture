import React, { useState } from 'react';
import './AjoutAnnonce.css';

interface ContainerProps {
    name: string;
}

const AjoutAnnonce: React.FC<ContainerProps> = ({ name }) => {
    const [datetime, setDatetime] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Récupérer le token depuis le localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token not found in localStorage');
            return;
        }

        // Créer l'objet de données à envoyer
        const formData = new FormData();
        formData.append('datetime', datetime);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);

        fetch('https://vaika-ws-production.up.railway.app/v1/annonces?idVoiture=1&userId=1&prix=3000', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add annonce');
                }
                return response.json();
            })
            .then(data => {
                console.log('Annonce ajoutée avec succès:', data);
            })
            .catch(error => {
                console.error('Error adding annonce:', error);
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="datetime" value={datetime} onChange={e => setDatetime(e.target.value)} />
                </p>
                <p>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </p>
                <p>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </p>
                <p>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                </p>
                photos
                <p>
                    <input type="submit" value="Ajouter Annonce" />
                </p>
            </form>
        </div>
    );
};

export default AjoutAnnonce;
