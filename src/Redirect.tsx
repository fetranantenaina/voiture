// DashboardPage.js

import { useAuth } from './AuthContext';
import Accueil from './pages/Accueil';
import { useEffect } from 'react'; 

const DashboardPage = () => {
    const { isAuthenticated } = useAuth();

    const handleLogout = () => {
        const accessToken = localStorage.getItem('accessToken');


        if (accessToken) {
            fetch('http://vaika-ws-production.up.railway.app/api/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(response => {
                    if (response.ok) {
                        localStorage.removeItem('accessToken');
                        console.log('Logout successful');
                    } else {
                        console.error('Logout failed');
                    }
                })
                .catch(error => {
                    console.error('Error during logout:', error);
                });
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            handleLogout();
        }
    }, []); 

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Accueil />
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
};

export default DashboardPage;


/*curl -X GET \ -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW9seUBnbWFpbC5jb20iLCJpYXQiOjE3MDc1NDAxMjgsImV4cCI6MTcwNzYyNjUyOH0.JzymBGarcty-d3sjzfAjSqo_eTD0__jvCm8NH-JWNao" \ -v -L "https://vaika-ws-production.up.railway.app/v1/annonces"

*/