import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = ( { user } ) => {

    const history = useNavigate( );

    const navigateGoTo = ( path ) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }




    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigateGoTo('/tasks') }>Tus tareas</button>
            <button onClick={ goBack }>Go back</button>
        </div>
    );
}

export default ProfilePage;
