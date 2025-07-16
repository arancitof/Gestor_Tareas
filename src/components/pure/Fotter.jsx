import React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



const Fotter = () => {

    return (
        /* Para navegación fuera de la app */
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyrigth (C)'}
            <Link color='inherit' href=''>
                Link Fuera
            </Link>
            { '' }
            { new Date().getFullYear() }
        </Typography>

    );
}

export default Fotter;
