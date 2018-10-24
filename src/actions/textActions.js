import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    let arrayOfWords = values.originalTextInput.split( " " );

    const buildArrayOfWordObjects = arrayOfWords.map( ( word, index ) => {
        let wordObject = {};
        wordObject.position = index;
        wordObject.originalText = word;
        wordObject.displayText = word;
        wordObject.selected = false;
        return wordObject;
    } );


    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            originalWords: [ ...arrayOfWords ],
            wordObjects: [ ...buildArrayOfWordObjects ]
        }
    }
};

export function clozeWord( positionWordObject ){




}; 
