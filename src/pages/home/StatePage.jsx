import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    console.log(Location.state.onLine) //Estado
    console.log(Location.search)

    return (
        <div>
            <h1>Estado{location.state.onLine}</h1>
        </div>
    );
}

export default StatePage;
