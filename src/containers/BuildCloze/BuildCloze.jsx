import React from 'react';
import { connect } from 'react-redux'; 
import './BuildCloze.css'; 

class BuildCloze extends React.Component{

    constructor( props ){
        super( props );
        this.recognizeWord = this.recognizeWord.bind( this ); 
    };
    
    recognizeWord( positionValue ){
        console.log( "Clicked a word", positionValue ); 
    }

    render() {

        let Display = ( this.props.wordObjects ).map( item => {
            return(  <span 
                className="wordSpan" 
                id={ `word_${ item.position }` } 
                key={ item.position } 
                onClick={ event => this.recognizeWord( item.position ) } 
                value={ item.displayText }>
                { item.displayText }{ " " } 
            </span> )
        } );

        return (
        <div className="App">
            <header className="App-header">
            <p>Build Cloze</p> 
            <p>{ Display }</p>
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