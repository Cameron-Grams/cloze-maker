import React from 'react';
import { connect } from 'react-redux'; 
import InputText from './InputText'; 
import { registerOriginalText } from '../../actions/textActions';
import './InputPage.css'; 

class InputPage extends React.Component{

    render() {

        const enterText = ( values ) => {
            console.log( 'input page, values: ', values ); 
            this.props.registerOriginalText( values );
        }

        return (
        <div className="App">
            <header className="App-header">
            <p>Input Text</p> 
            < InputText onSubmit={ enterText } /> 
            </header>
        </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    originalText: state.originalText
})

export default connect( mapStateToProps, { registerOriginalText } )( InputPage );

