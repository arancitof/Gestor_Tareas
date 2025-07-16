import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const goToPath = (path) => {
        navigate(path);
    }

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?onLine=true', //Query Params
            state: {
                onLine: true,
            }
        });
    };


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => goToPath('/profile')}>
                Go To profile
            </button>
            <button onClick={() => navigateProps('/online-state')}>
                Go To State
            </button>


        </div>
    );
}

export default HomePage;
