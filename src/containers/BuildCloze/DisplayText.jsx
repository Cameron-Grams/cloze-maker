import React from 'react';

const DisplayText = ( props ) => {

// use the array to create an array of elements that have the features:
// clickable --> click leads to adding the word to the vocabulary list and 
// replacing the element text with _____

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