import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePagee = () => {

    const location = useLocation();

    console.log(location.state?.online); //Estado
    console.log(location.search);

    return (
        <div>

            <h1>Estado: {location.state?.online ? 'El usuario esta en linea' : 'El usuario no esta en linea'}</h1>
            <h1>Query: {location.search ? 'El usuario esta en linea' : 'El usuario no esta en linea'}</h1>
        </div>
    );
}

export default StatePagee;
