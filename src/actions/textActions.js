import * as actionTypes from './actionTypes';

export function registerOriginalText( values ){

    let paragraphs = [];
    let allWordObjects = [];

    let dirtyParagraphs = values.originalTextInput.split( "\n" ); 

    let paragraphStrings = dirtyParagraphs.filter( str => str !== "" ); 

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

export function improperInput(){
    return {
        type: actionTypes.improperInputRecieved
    }
}


export function vocabularyWord( selectedWord ){
    let finalWord = selectedWord.replace(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g,"");

    return({
        type: actionTypes.addVocabularyWord,
        data: {
            vocabularyList: finalWord 
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