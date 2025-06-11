/**
 * Componente que va a contender un formulario de login
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials =  [ 
        {
            user: '',
            password: ''
        }
    ];

    useState [ credentials, setCredentials ] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
