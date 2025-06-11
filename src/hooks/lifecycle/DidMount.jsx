/**
 * Ejemplo de uso del metodo
 * de ciclo de vida de un componente clase
 * y un hook de ciclo de vida de componente funcional
 */


import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamineto antes de que el componente sea aniadido al DOM');
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamineto antes de que el componente sea aniadido al DOM');
    }, [])
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}




