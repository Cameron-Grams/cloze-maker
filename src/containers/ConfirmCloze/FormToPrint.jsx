import React from 'react';
import { connect } from 'react-redux'; 
import './ConfirmCloze.css';

class FormToPrint extends React.Component{

    render() {

        let DisplayText = ( this.props.wordObjects ).map( ( item, index ) => {
            return(  <span 
                className="wordSpan" 
                key={ index }
                id={ `word_${ item.position }` } >
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
        <div className="finalForm">
            <header className="finalForm-header">
            <div id="printComponentDiv">  
                <h1 id="finalTitle" >{ this.props.title }</h1>
                <h4>Exercise Vocabulary:</h4>
                <p>{ DisplayVocabulary }</p>
                <h4>Exercise Text:</h4>
                <p>{ DisplayText }</p>
            </div>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, {} )( FormToPrint ); 

