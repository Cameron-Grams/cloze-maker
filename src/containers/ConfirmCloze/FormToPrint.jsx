import React from 'react';
import { connect } from 'react-redux'; 
import DisplayText from '../../components/DisplayText'; 
import DisplayVocabulary from '../../components/DisplayVocabulary'; 
import './ConfirmCloze.css';

class FormToPrint extends React.Component{

    render() {

        return (
        <div className="finalForm">
            <header className="finalForm-header">
            <div id="printComponentDiv">  
                <h2 id="finalTitle" >{ this.props.title }</h2>
                <h4>Exercise Vocabulary:</h4>
                <p  className="textToPrint">< DisplayVocabulary vocab={ this.props.vocabularyList } /></p>
                <h4>Exercise Text:</h4>
                <  DisplayText className={ "textToPrint" } allParagraphs={ this.props.paragraphs } onClick={ e => null } />
            </div>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
    paragraphs: state.reducer.paragraphs,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, {} )( FormToPrint ); 

