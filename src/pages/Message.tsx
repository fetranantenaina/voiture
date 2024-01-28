import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Message.css';

const Message: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Messages</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Messages</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <p>
                    <strong>Liste mess</strong>
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Message;