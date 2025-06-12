import React, { useState } from 'react';

//Definiendo estilos en constantes

//Estilos para cuando se esta loggeado
const loggedStyle = {
    color: 'white',

};

//Estilos para no loggeadso
const unLoggedStyle = {
    color: 'red',
    fontWeight: 'bold',
}


const GrettingStyled = (props) => {

    //Generamos un estado
    //Para controlar si el usuario esta o no loggeado
    const [logged, setLogged] = useState(false)

    const grettingUser = (<p>Hola, {props.name}</p>)
    const pleaseLogin = (<p>Please Login</p>)


    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ?
                grettingUser
                :
                pleaseLogin}
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged); //Cambiamos el estado
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GrettingStyled;
