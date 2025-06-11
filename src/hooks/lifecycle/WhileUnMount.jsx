/**
 * Ejemplo de uso del metodo componte clase WhilUnMount
 * y componente funcional
 * (cuando desaparece)
 */

import React, { Component, useEffect } from 'react';

export class WhileUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnmonut</h1>
            </div>
        );
    }
}



export const WhileUnMountHook = () => {

    useEffect(() => {
        //Aqui no se pone nada
        
        return () => {
            console.log('comportamniento del componente antes de que desaparezca')
        };
    }, []);

    return (
        <div>
            <h1>WilUnmount</h1>
        </div>
    );
}





