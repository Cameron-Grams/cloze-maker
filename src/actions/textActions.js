import * as actionTypes from './actionTypes';





export function buildArrayOfWords( fullStringText ){
    let arrayOfWords = fullStringText.originalTextInput.split( " " );
    console.log( "In text actions with array of words: ", arrayOfWords );
    return{
        type: actionTypes.loadOriginalWords,
        data: [ ...arrayOfWords ]
    }; 
}

export function registerOriginalText( values ){

    console.log( 'text action register text: ', values )

    return{
        type: actionTypes.registerOriginalText,
        data: { ...values }
    }
}