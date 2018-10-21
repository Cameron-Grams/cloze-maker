import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    return{
        type: actionTypes.registerOriginalText,
        data: { ...values }
    }
}