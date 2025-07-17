import React from 'react';

const AsyncExample = () => {

    /* Sintaxis de función asíncrona */

    async function generateNumber(params) {
        //Valor futuro
        return 1;
    }

    /* Promesa: Forma de gestión rápida la 
    presentación de un objeto, que en un futuro se genera o falla */
    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            /* Then es para la resolución esperada  */
            .then((response) => alert(`Response: ${response}`))
            /*Para gestionar los errores  */
            .catch((error) => alert(`Algo esta mal: ${error} `))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Algo esta mal: ${error} `))
    }



    async function saveSessionStorage(key, value) {
        /* Punto donde se necesita el control de funciones asíncronas */
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('nombre', 'Alan')
        /* El nombre response es genérico, no importa lo que se use */
        /* Funcion Callback, algo que se ejecuta no de forma instantánea  */
            .then((response) => {
                let value = response;
                alert(`Nombre guardado: ${value}`);
            }).catch( ( error ) => {
                alert(`Algo ha salido mal: ${error} `)
            /* Finally es para cuando ya se resolvió el Then o el catch o y es un punto y aparte */
            }).finally( ( ) => alert('Nombre Guardado Satisfactoriamente') )
    }


    /*Simulación de asincronía real  */
    async function obtainMessage () {

        let promise = new Promise((resolve, reject) => {
            setTimeout ( () => resolve('Hello world'),2000 )
            
        });
        let message = await promise;

        await alert(`El mensaje ha sido recibido: ${message}`)

    }

    /* Función de ejemplo con errores */

    const returnError = async () => {
        await Promise.reject(new Error('Upsss, no pudimos seguir con la petición'));
    }

    const consumeError = () => {
        returnError()
            .then(( response) => alert(`Todo esta bien: ${response}`))
            .catch( ( error ) => alert(`Algo ha salido mal: ${error}`))
            .finally( () => alert('Finally'))
    }

    /* Ejemplo usando Try Cath */
    const urlNotFound = async () => {
        try {
            /* Fetch obtener información del futuro a una API */
            let response = await fetch ('https://invalidURL.com')
            alert(`Response ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Algo ha salido mal con la URL solicitada: ${error}`)
        }
    }

    /* Gestión de varias promesas a la vez */
    const multiplePromise = async () => {
        let results = await Promise.all( 
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch( ( error ) => alert(`Algo ha salido mal con la URL solicitada: ${error}`)) 
    }



    return (
        <div>
            <h1>Eventos de Asincronía </h1>
            <button onClick={obtainNumber}>Obtener Numero</button>
            <button onClick={obtainPromiseNumber}>Obtener Numero Promesa</button>
            <button onClick={showStorage}>Guardar Nombre</button>
            <button onClick={obtainMessage}>Enviar Mensaje al Futuro</button>
            <button onClick={consumeError}>Obtener Error</button>
            <button onClick={urlNotFound}>Petición a URL que no existe</button>
            <button onClick={multiplePromise}>Obtener multiples promesas</button>
        </div>
    );
}

export default AsyncExample;
