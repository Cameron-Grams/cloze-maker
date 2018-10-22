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

        case( actionTypes.loadOriginalWords ): 
            console.log( 'in reducer with load original words ', action );

            return {
                ...state,
                originalWords: action.data
            }

        default:
            return state
        ;
    }

};

export default Reducer; 

