/* componente de funcion */

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GrettingF = (props) => {

    const [age, setState] = useState(29);

    const birthday = () => {
        //actualizar el estado
        setState(age + 1);

    }

    return (
        <div>
            <h1>
                Hola { props.name } desde componente funcional !!
            </h1>
            <h2>
                Tu edad es de: { age } años
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GrettingF.propTypes = {
    name: PropTypes.string

};


export default GrettingF;
