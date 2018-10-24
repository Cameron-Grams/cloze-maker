import React from 'react';

const DisplayText = ( props ) => {

    let newArray = props.inputArray.map(  item => {
        return( <span 
            className="wordSpan" 
            id={ `word_${ item.position }` } 
            key={ item.position } 
            onClick={ props.handleClick } 
            value={ item.displayText }>
            { item.displayText }{ " " } 
            </span> )
    })

    return newArray; 




}


export default DisplayText; 