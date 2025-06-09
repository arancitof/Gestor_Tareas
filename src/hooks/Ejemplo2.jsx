/**
 * Ejemplo de uso de los siguientes hooks
 * ---useState
 * ---useRef
 * ---useEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Crear dos contadores distintos en estados distintos

    const [ contador1, setContador1 ] = useState(0);
    const [ contador2, setContador2 ] = useState(0);

    //Se crea una referencia con useRef para asociar una variable con un 
    //elemento del DOM del componente en el vista del HTML

    const miRef = useRef();

    //Funcion para incrementar el contador1
    function incrementarUno() {
        setContador1(contador1 + 1);
    }

    //Funcion para incrementar el contador2
    function incrementarDos() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajar con useEffect
     * caso 1: ejecutar SIEMPRE un snipet de codigo
     * Cada vez que hay un cambio de estado del componente
     * se ejecuta lo que hay en el useEffect
     */

/*     useEffect(() => {
        console.log('Se ha actualizado el componente');
        console.log('Mostrando referencia al elemento DOM')
        console.log(miRef);
        }); */

        /**
         * CASO 2 : Ejecutar solo cuando cambie el contador 1
         * Cuando contador se ejecute no cmabiara
         */

/*         useEffect (() => {
            console.log('cambio en el estado del contador 1 ')
            console.log('Mostrando referencia al elemento DOM')
            console.log(miRef);
        }, [ contador1 ]); */

        /**
         * CASO 3: Ejecutar solo cuando cambie el contador 1 o contador 2
         * cada vez que haya un estado en contador 1, se ejecuta lo que hay en useEffect
         */

        useEffect (() => {
            console.log('cambio en el estado del contador 1 o contador 2 ')
            console.log('Mostrando referencia al elemento DOM')
            console.log(miRef);
        }, [ contador1, contador2 ]); 




    return (
        <div>
            <h1>***Ejemplo de useState, useEffect, useRef</h1>
            <h2>Contador1: { contador1 }</h2>
            <h2>Contador2: { contador2 }</h2>
            {/* Ejemplo de elemento referencia */}
            <h4 ref={miRef}>Elemento referencia</h4>

            {/* Btns para cambiar los contadores */}
            <button onClick={ incrementarUno }>Incrementar Contador1</button>
            <button onClick={ incrementarDos }>Incrementar Contador2</button>

        </div>
    );
}

export default Ejemplo2;
