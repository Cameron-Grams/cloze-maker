import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    let arrayOfWords = values.originalTextInput.split( " " );
    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            originalWords: [ ...arrayOfWords ]
        }
    }
}