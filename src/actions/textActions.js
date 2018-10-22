import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    let arrayOfWords = values.originalTextInput.split( " " );
    console.log( 'text action register text: ', values )
    console.log( "In text actions with array of words: ", arrayOfWords );

    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            originalWords: [ ...arrayOfWords ]
        }
    }
}