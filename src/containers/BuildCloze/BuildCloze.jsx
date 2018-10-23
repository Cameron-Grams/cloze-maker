import React from 'react';
import { connect } from 'react-redux'; 
import DisplayText from './DisplayText'; 
import './BuildCloze.css'; 

class BuildCloze extends React.Component{

    recognizeWord = ( e ) => {
        console.log( "Clicked a word", e.value ); 
    }


    // https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele
    // try working the access by refs  

    render() {

        console.log( 'in build with ', this.props ); 

        return (
        <div className="App">
            <header className="App-header">
            <p>Build Cloze</p> 
            <p>< DisplayText handleClick={ this.recognizeWord } inputArray={ this.props.wordObjects } /></p>
            </header>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    originalText: state.reducer.originalText,
    wordObjects: state.reducer.wordObjects
})

export default connect( mapStateToProps, { } )( BuildCloze );

// this page will have the selectable words from the array built from the original text