import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname);

    const goToPath = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(+1);
    }


    return (
        <div>
            <h1>
                About | faqs
            </h1>
            <div>
                <button onClick={() => goToPath('/')}>
                    Go To Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
