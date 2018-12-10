import React from 'react';
import { connect } from 'react-redux'; 
import {  vocabularyWord, 
          updateWordDisplay,
          resetExercise           
        } from '../../actions/textActions'; 
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
        let punctuation = null;
        let updatedWordObjects = this.props.wordObjects.map( singleWordObject => {
            if ( ( singleWordObject.paragraph === paragraphValue ) && ( singleWordObject.position === positionValue ) ) {
                let punctuationArray = singleWordObject.originalWord.match(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g,"")
                if ( punctuationArray ){
                    punctuation = punctuationArray[ 0 ];
                } else {
                    punctuation = ""; 
                }
                singleWordObject.displayShowing = '_____________' + punctuation; 
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
        let newWordArray = wordValue.additionalVocabulary.split( " " );
        newWordArray.forEach( ( newWord ) => this.props.vocabularyWord( newWord ) ); 
    }

    goToConfirm(){
        this.props.history.push( '/confirm-cloze' ); 
    }

    startNew(){
        this.props.history.push( 'input-text' ); 
        this.props.resetExercise();
    }

    render() {

        let vocab = ( this.props.vocabularyList.length >= 1 ) ? 
                  <div>
                    <h4>Exercise Vocbaulary:</h4>
                    <p className="displayForVocab">< DisplayVocabulary vocab={ this.props.vocabularyList } /></p>
                  </div>: null; 

        return (
        <div className="ClozeDiv App">
            <div  id="buttonDiv" >
                <button className="clozeButton submitButton" onClick={ e => this.startNew() } >Start Over</button>
                <button className="submitButton" onClick={ this.goToConfirm } >Confirm Worksheet and Print</button>
            </div>
            <header className="App-header">
                <h3>{ this.props.title }</h3>
                <h4 className="targetTitle">Target Text:</h4>
                < DisplayText className={ "displayTargetText"} allParagraphs={ this.props.paragraphs } onClick={ ( paragraph, position ) => this.recognizeWord( paragraph, position )}    /> 
                { vocab }
                < AddVocabularyWords onSubmit={ this.moreVocab } />
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
    paragraphs: state.reducer.paragraphs,
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, { vocabularyWord, updateWordDisplay, resetExercise } )( BuildCloze );