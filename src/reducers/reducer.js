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
                originalText: action.data.originalTextInput }
        }

        default:
            return state
        ;
    }

};

export default Reducer; 

