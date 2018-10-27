import React from 'react';
import { connect } from 'react-redux'; 
import './ConfirmCloze.css';

class FormToPrint extends React.Component{

    render() {

        let DisplayText = this.props.paragraphs.map( ( paragraphArray, pindex ) => {

            let DisplayParagraph = paragraphArray.map( item => {

                return(  <span 
                            className="wordSpan" 
                            id={ `paragraph_${ item.paragraph }_word_${ item.position }` } 
                            key={ item.position } 
                            onClick={ event => this.recognizeWord( item.paragraph, item.position ) } 
                            value={ item.displayText }>
                            { item.displayShowing }{ " " } 
                        </span> )
                } ); 
            
            return(
                <p className="textToPrint" key={ pindex }>{ DisplayParagraph }</p>
            )
        })

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
                <h2 id="finalTitle" >{ this.props.title }</h2>
                <h4>Exercise Vocabulary:</h4>
                <p  className="textToPrint">{ DisplayVocabulary }</p>
                <h4>Exercise Text:</h4>
                <p className="textToPrint">{ DisplayText }</p>
            </div>
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

export default connect( mapStateToProps, {} )( FormToPrint ); 

