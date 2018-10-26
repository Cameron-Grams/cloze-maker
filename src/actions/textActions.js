import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){
    let arrayOfWords = values.originalTextInput.split( " " );

    let paragraphs = values.originalTextInput.split( "\n" ); 
    console.log( 'in text action deriving paragraphs: ', paragraphs ); 

    // cycle through paragraphs, build word objects with a field paragrapahs

    // allWordObjects = [];    <-- append the objects from each sentence into this 

    //  Design choice:  which is better: to hold separate paragraphs of word objects or a single array
    // with paragraph information as an element of the object? 

    //  on the objects should make finding it on the DOM easier.  Yes?  


    /* paragraphs.forEach( ( sentence, index ) => {
           sentence.map( ( word, index ) => {

           })
    })


*/


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
