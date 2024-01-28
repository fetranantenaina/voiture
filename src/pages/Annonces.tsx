import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AjoutAnnonce from '../components/AjoutAnnonce';
import ListeAnnonce from '../components/ListeAnnonce';
import StatutAnnonce from '../components/StatutAnnonce';
import './Annonces.css';

const Annonces: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState('ajout');

    const handleToggle = (componentName: string) => {
        setActiveComponent(componentName);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{activeComponent === 'ajout' ? 'Ajout Annonce' : activeComponent === 'liste' ? 'Liste Annonce' : 'Statut Annonce'}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{activeComponent === 'ajout' ? 'Ajout Annonce' : activeComponent === 'liste' ? 'Liste Annonce' : 'Statut Annonce'}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {activeComponent === 'ajout' && <AjoutAnnonce name="ajout" />}
                {activeComponent === 'liste' && <ListeAnnonce name="liste" />}
                {activeComponent === 'statut' && <StatutAnnonce name="statut" />}
                <p>
                    <button onClick={() => handleToggle('ajout')}>Ajout Annonce</button>
                </p>
                <p>
                    <button onClick={() => handleToggle('liste')}>Liste Annonce</button>
                </p>
                <p>
                    <button onClick={() => handleToggle('statut')}>Statut Annonce</button>
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Annonces;
