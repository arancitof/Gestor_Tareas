import React, { useState } from 'react';

const RegisterForm = () => {
        const initialData =  [ 
            {
                user: '',
                name: '',
                email: '',
                password: ''
            }
        ];
    
        useState [ data, setData ] = useState(initialData);
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
