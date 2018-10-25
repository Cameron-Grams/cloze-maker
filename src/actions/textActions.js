import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    let arrayOfWords = values.originalTextInput.split( " " );

    let paragraphs = values.originalTextInput.split( "\n" ); 
    console.log( paragraphs ); 

    const buildArrayOfWordObjects = arrayOfWords.map( ( word, index ) => {
        let wordObject = {};

        wordObject.position = index;
        wordObject.originalWord = word;
        wordObject.displayShowing = word;
        wordObject.selected = false;
        return wordObject;
    } );

    const title = values.textTitleInput;


    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            title: title, 
            originalWords: [ ...arrayOfWords ],
            wordObjects: [ ...buildArrayOfWordObjects ]
        }
    }
};

export function vocabularyWord( selectedWord ){
    console.log( "in text action with position word object ", selectedWord );
    return({
        type: actionTypes.addVocabularyWord,
        data: {
            vocabularyList: selectedWord 
        }
    })



}; 

export function updateWordDisplay( newArrayWordObjects ){
    
    return( {
        type: actionTypes.updateWordDisplay,
        data:{
            wordObjects: newArrayWordObjects
        }
    })
}
