import React, { useState } from 'react';
import { getNumbers } from '../../services/observableServices'; 

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number: ', newNumber );
                    setNumber(newNumber);
                },
                error( error ) {
                    alert(`Algo ha salido mal: ${error}`)
                    console.log('Error de observable')
                },
                complete(){
                    alert(`Se ha terminado: ${number}`)
                    console.log('Done observable')
                }
            }
        )
    }

    return (
        <div>
            <h1>Numero: {number}</h1>
            <button onClick={obtainNewNumbers}>Obtener el Numero</button>
        </div>
    );
}

export default ObservableExample;
