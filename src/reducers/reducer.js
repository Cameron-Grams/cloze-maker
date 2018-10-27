import * as actionTypes from '../actions/actionTypes'; 

// paragraphs is an array of arrays; the inner arrays are the collections of words in the paragraph in object form
// wordObjects is an array of all of the words in object form; paragraphs are designated as a property
const initialState = {
    title: "",
    originalText: " Mystery Text... ",
    originalWords: [],
    paragraphs: [], 
    wordObjects: [ {} ],
    vocabularyList: [ "mootus", "applegate", "gymnast" ]   
};

const Reducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case( actionTypes.registerOriginalText ):{
            return { 
                ...state,
                title: action.data.title,
                originalText: action.data.originalTextInput,
                originalWords: action.data.originalWords,
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

        default:
            return state
        ;
    }
};

export default Reducer; 

