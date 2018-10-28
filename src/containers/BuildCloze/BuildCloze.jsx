import React from 'react';
import { connect } from 'react-redux'; 
import {  vocabularyWord, updateWordDisplay } from '../../actions/textActions'; 
import AddVocabularyWords from './AddVocabularyWords'; 
import DisplayText from '../../components/DisplayText'; 
import DisplayVocabulary from '../../components/DisplayVocabulary'; 
import './BuildCloze.css'; 

class BuildCloze extends React.Component{

    constructor( props ){
        super( props );
        this.recognizeWord = this.recognizeWord.bind( this ); 
        this.moreVocab = this.moreVocab.bind( this ); 
        this.goToConfirm = this.goToConfirm.bind( this ); 
    };
    
    recognizeWord( paragraphValue, positionValue ){
        let updatedWordObjects = this.props.wordObjects.map( singleWordObject => {
            if ( ( singleWordObject.paragraph === paragraphValue ) && ( singleWordObject.position === positionValue ) ) {
                singleWordObject.displayShowing = '_____________'; 
            };
            return singleWordObject; 
        })
        let targetWordObject = this.props.wordObjects.filter( possibleWord => 
            (  possibleWord.paragraph === paragraphValue && possibleWord.position === positionValue )
        )

        this.props.updateWordDisplay( updatedWordObjects );  
        this.props.vocabularyWord( targetWordObject[ 0 ].originalWord ); 
    }

    moreVocab( wordValue ){
        console.log( 'in build cloze with: ', wordValue )
        let newWordArray = wordValue.additionalVocabulary.split( " " );
        newWordArray.forEach( ( newWord ) => this.props.vocabularyWord( newWord ) ); 
    }

    goToConfirm(){
        this.props.history.push( '/confirm-cloze' ); 
    }

    render() {

        return (
        <div className="App">
            <header className="App-header">
                <h1>Build Cloze</h1> 

                  <h3>Text Vocbaulary:</h3>
                    <p>< DisplayVocabulary vocab={ this.props.vocabularyList } /></p>
                    < AddVocabularyWords onSubmit={ this.moreVocab } />

                <h3>Target Text:</h3>

                    < DisplayText className={ "displayTargetText"} allParagraphs={ this.props.paragraphs } onClick={ ( paragraph, position ) => this.recognizeWord( paragraph, position )}    /> 

            <div><button className="submitButton" onClick={ this.goToConfirm } >Confirm Worksheet and Print</button></div>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    paragraphs: state.reducer.paragraphs,
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, { vocabularyWord, updateWordDisplay } )( BuildCloze );

// this page will have the selectable words from the array built from the original text