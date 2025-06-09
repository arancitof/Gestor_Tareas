/**
 * Ejemplo de uso de useState
 * crear un componente de tipo función y acceder a su estado privado
 * y ademas poder modificarlo 
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador

    const valorInicial = 0; // Valor inicial para el contador

    //Valor inicial para una persona 
    const personaInicial = {
        nombre: "Juan",
        email: "juan@gmail.com",
    }

    /**
     * Queremos que el VALORINICIAL y PersonaInicial sean
     * parte del estado del component para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * const [ nombreVariable, funcionParaCambiarla ] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        //Incrementar el contador
        setContador(contador + 1);
    }

    //Funcion para Actualizar el estado de persona en el componente
    function actualizarPersona(nombre) {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com',
            }
        )

    }



    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona</h2>
            <h3>
                Nombre: {persona.nombre}
            </h3>
            <h4>
                Email: {persona.email}
            </h4>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Incrementar persona</button>



        </div>
    );
}

export default Ejemplo1;


