import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

        const location = useLocation();
        const navigate = useNavigate();

        const goToPath = (path) => {
        navigate(path);
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => goToPath('/profile')}>
                Go To profile
            </button>

            
        </div>
    );
}

export default HomePage;
