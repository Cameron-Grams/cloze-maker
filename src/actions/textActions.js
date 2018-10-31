import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){

    let paragraphs = [];
    let allWordObjects = [];

    let paragraphStrings = values.originalTextInput.split( "\n" ); 
    console.log( 'in text action deriving paragraphs: ', paragraphStrings ); 

    // cycle through paragraphs, build word objects with a field paragrapahs

    // allWordObjects = [];    <-- append the objects from each sentence into this 

    //  Design choice:  which is better: to hold separate paragraphs of word objects or a single array
    // with paragraph information as an element of the object? 

    //  on the objects should make finding it on the DOM easier.  Yes?  

    //  Do both: store the paragraphs in paragraph arrays and retain the paragraph number on the word objects;
    //    arrays will make display simpiler and the object information will make selection easier

    //  we are going to need to test the SINGLE PARAGRAPH case on whatever choice... 

    /* paragraphs.forEach( ( sentence, index ) => {
           sentence.map( ( word, index ) => {

           })
    })
*/

    paragraphStrings.forEach( ( paragraph, pindex ) => {
        const wordsInParagraph = paragraph.split( " " );

        const paragraphWordArray = wordsInParagraph.map( ( word, index ) => {
            let wordObject = {};

            wordObject.paragraph = pindex;
            wordObject.position = index;
            wordObject.originalWord = word;
            wordObject.displayShowing = word;
            wordObject.selected = false;
            
            allWordObjects.push( wordObject ); 
            return wordObject;
        } ); 
        paragraphs.push( paragraphWordArray ); 
        return paragraphs; 
    }); 

    const title = values.textTitleInput;

    console.log( " in text actions with paragraphs: ", paragraphs ); 

    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            title: title, 
            wordObjects: [ ...allWordObjects ],
            paragraphs: [ ...paragraphs ] 
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

export function resetExercise(){
    return({
        type: actionTypes.reset
    })
}