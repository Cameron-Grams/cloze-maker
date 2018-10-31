import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    title: "",
    originalText: " Mystery Text... ",
    originalWords: [],
    paragraphs: [], 
    wordObjects: [ {} ],
    vocabularyList: [ "" ]   
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case( actionTypes.registerOriginalText ):{
            return { 
                ...state,
                title: action.data.title,
                paragraphs: action.data.paragraphs,
                wordObjects: action.data.wordObjects

            }
        }

        case( actionTypes.addVocabularyWord ): {
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

        case( actionTypes.reset ): {
            return {
                ...initialState
            }
        }
        default:
            return state
        ;
    }
};

export default Reducer; 

