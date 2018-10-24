import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    title: "",
    originalText: " Mystery Text... ",
    originalWords: [],
    wordObjects: [ {} ],
    vocabularyList: [ "mootus", "applegate", "gymnast" ]   
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case( actionTypes.registerOriginalText ):{
            return { 
                ...state,
                originalText: action.data.originalTextInput,
                originalWords: action.data.originalWords,
                wordObjects: action.data.wordObjects
            }
        }

        case( actionTypes.addClozeWord ): {
            return {
                ...state,
                vocabularyList: [ ...state.vocabularyList, action.data.vocabularyList ]
            }
        }

        case( actionTypes.updateWordDisplay ): {
            return {
                ...state,
                wordObjects: action.data.wordObjects
            }
        }

        default:
            return state
        ;
    }
};

export default Reducer; 

