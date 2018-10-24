import React from 'react';
import { connect } from 'react-redux'; 
import {  vocabularyWord, updateWordDisplay } from '../../actions/textActions'; 
import './BuildCloze.css'; 

class BuildCloze extends React.Component{

    constructor( props ){
        super( props );
        this.recognizeWord = this.recognizeWord.bind( this ); 
    };
    
    recognizeWord( positionValue ){
        let updatedWordObjects = this.props.wordObjects.map( singleWordObject => {
            if ( singleWordObject.position === positionValue ){
                singleWordObject.displayShowing = '_____________'; 
            };
            return singleWordObject; 
        })
        let targetWordObject = this.props.wordObjects.filter( possibleWord => 
            possibleWord.position === positionValue
        )
        this.props.updateWordDisplay( updatedWordObjects );  
        this.props.vocabularyWord( targetWordObject[ 0 ].originalWord ); 
    }

    render() {
        let DisplayText = ( this.props.wordObjects ).map( item => {
            return(  <span 
                className="wordSpan" 
                id={ `word_${ item.position }` } 
                key={ item.position } 
                onClick={ event => this.recognizeWord( item.position ) } 
                value={ item.displayText }>
                { item.displayShowing }{ " " } 
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
            <h1>Build Cloze</h1> 
            <h3>Target Text:</h3>
            <p>{ DisplayText }</p>
            <h3>Text Vocbaulary:</h3>
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

export default connect( mapStateToProps, { vocabularyWord, updateWordDisplay } )( BuildCloze );

// this page will have the selectable words from the array built from the original text