import React from 'react';
import { connect } from 'react-redux'; 
import {  clozeWord } from '../../actions/textActions'; 
import './BuildCloze.css'; 

class BuildCloze extends React.Component{

    constructor( props ){
        super( props );
        this.recognizeWord = this.recognizeWord.bind( this ); 
    };
    
    recognizeWord( positionValue ){


        let targetWordObject = this.props.wordObjects.filter( possibleWord => {
            if ( possibleWord.position === positionValue ){
                return possibleWord;
            }
        })

        console.log( "Clicked a word", targetWordObject ); 

//        this.props.clozeWord( positionValue ); 
    }

    render() {

        let DisplayText = ( this.props.wordObjects ).map( item => {
            return(  <span 
                className="wordSpan" 
                id={ `word_${ item.position }` } 
                key={ item.position } 
                onClick={ event => this.recognizeWord( item.position ) } 
                value={ item.displayText }>
                { item.displayText }{ " " } 
            </span> )
        } );

        let DisplayVocabulary = ( this.props.vocabularyList ).map( ( word, index ) => {
            return(
                <span className="vocabularySpan" 
                    key={ index } 
                >
                    { word }{" "}
                </span>
            )
        })

        return (
        <div className="App">
            <header className="App-header">
            <p>Build Cloze</p> 
            <p>Target Text:</p>
            <p>{ DisplayText }</p>
            <p>Text Vocbaulary:</p>
            <p>{ DisplayVocabulary }</p>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    originalText: state.reducer.originalText,
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, { clozeWord } )( BuildCloze );

// this page will have the selectable words from the array built from the original text