import React from 'react';
import Button from '@mui/material/Button';
import Fotter from '../../components/pure/Fotter';
import { Navigate, useNavigate } from 'react-router-dom';

const DashBoard = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login');

    
    }

    return (
        <div>
            <Button variant="contained" onClick={logOut}>Cerrar Sesión</Button>
            <Fotter></Fotter>
        </div>
    );
}

export default DashBoard;
