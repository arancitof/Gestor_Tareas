/**
 * Ejemplo de Hooks:
 * ---useState
 * ---useContext
 */

import React, { useState, useContext } from 'react';


/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto);

    //Iniciamos con el estado vacio para rellenarse con 
    //los datos del contextro padre



    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2></Componente2>

        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);


    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>

        </div>
    );
}



export default function MicomponenteConContexto() {

    const estadoInicial = {
        token: '1234567890',
        sesion: '1'
    }

    //Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    //funcion para agregar nuevos valores

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JASDF142',
                sesion: sessionData.sesion + 1

            }
        );
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que esta aqui dentro puede leer los datos y actualizar de sessionData */}
                {/* Ademas los componentes al actulizarse aqui tambien se acualizan */}
                <h1>Ejemplo de useState y useContext</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesion</button>
            </miContexto.Provider>

        </div>
    )
}






