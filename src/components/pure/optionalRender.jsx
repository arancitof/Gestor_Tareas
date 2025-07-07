import React, { useState } from 'react';

let red = '0';
let green = '200';
let blue = '150';

//Estilos para cuando se esta loggeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',

};

//Estilos para no loggeadso
const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold',
}

//Login LogOut buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={ loginAction }>LogIn</button>
    )
}

const LogoutButton = ({logoutAction,propStyle}) => {
    return (
        <button style={propStyle} onClick={ logoutAction }>LogOut</button>
    )
}


// ? (Expresion True) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => NO se renderiza la expresion




const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

/*     const updateAccess = () => {
        setAccess(!access);

    } */


    const loginAction = () => {
        setAccess (true)
    }

        const logoutAction = () => {
        setAccess (false)
    }

    let optionalButton;

    if (access) {
        optionalButton = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    /* Unread Messages */

    let addMessages = () => {
        setNMessages(nMessages +1)
    }


    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* Mensajes no leidos */}
            {/* { nMessages > 0 && nMessages === 1 && <p>Tienes {nMessages} un nuevo mensaje </p>}
            { nMessages > 1 && <p>Tienes {nMessages} nuevos mensajes </p>}
            { nMessages === 0 && <p> No tienes nuevos mensajes </p>} */}
            {/*  Usando Operador ternario */}
            { access ? (
                <div>
                    { nMessages > 0 ? 
            <p>Tienes {nMessages}  nuevo mensaje {nMessages > 1 ? 's' : null }</p> 
            : 
            <p>No tienes nuevos mensajes</p>
            }
            <button onClick={ addMessages }>{ nMessages === 0 ? "Agrega tu primer mensaje" : 'Agrega un nuevo mensaje'}</button>
                </div>) : null}
            
        </div>
    );
}

export default OptionalRender;
