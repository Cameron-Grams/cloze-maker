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
        <div className="App">
            <header className="App-header">
            <div id="printComponentDiv">  
                <h1>Title of the Worksheet</h1>
                <p>Confirm Cloze content</p> 
                <p>{ DisplayVocabulary }</p>
                <p>{ DisplayText }</p>
            </div>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, {} )( FormToPrint ); 

