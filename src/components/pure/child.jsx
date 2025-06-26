import React, { useRef } from 'react';

const Child = ({ name, send, update  }) => {

    const messageRef = useRef ( '' )
    const nameRef = useRef ( '' )

    function pressButton () {
        const text = messageRef.current.value;
        alert(`Text in Input : ${text}`);

    }

    function pressButtonParams ( text ) {
        alert(`Text: ${text}`);

    }

    function submitName ( e ) {
        e.preventDefault();
        update( nameRef.current.value );
    }

    return (
        <div style={ { backgroundColor: 'cyan', padding: '30px' } }>
            <p onMouseOver={ () => console.log('On Mouse Over')}>
                Hello { name } 
            </p>
            <button onClick={ () => console.log('boton 1 pulsado')}>
                Boton 1
            </button>
            <button onClick={ pressButton }>
                Boton 2
            </button>
            <button onClick={ () => pressButtonParams('Hello')}>
                Boton 3
            </button>
            <input 
                
                placeholder = 'Send a text'
                onFocus={ () => console.log('I get Focus')}
                onChange={ (e) => console.log('Input Change: ', e.target.value ) }
                onCopy={ ( ) => console.log('copied text from imput') }
                ref={ messageRef }
                />
                <button onClick={ () => send(messageRef.current.value)}>
                    Send Message
                </button>
                <div style={ { marginTop: '20px'} }>
                    <form onSubmit={ submitName }>
                        <input ref={ nameRef } placeholder='New Name' />
                        <button type='submit'>
                            Update Name
                        </button>
                    </form>

                </div>
        </div>
    );
}

export default Child;
