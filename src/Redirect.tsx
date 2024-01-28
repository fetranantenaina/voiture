// DashboardPage.js

import { useAuth } from './AuthContext';
import Accueil from './pages/Accueil';


const DashboardPage = () => {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        // Logique de déconnexion
        // Utilisez le contexte pour définir l'état d'authentification
        logout();
    };

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Accueil />
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
};

export default DashboardPage;
