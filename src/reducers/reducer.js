import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    originalText: " Mystery Text... ",
    originalWords: [],
    wordObjects: [ {} ]   
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case( actionTypes.registerOriginalText ):{
            return { 
                ...state,
                originalText: action.data.originalTextInput,
                originalWords: action.data.originalWords
            }
        }

        default:
            return state
        ;
    }
};

export default Reducer; 

