import React from 'react';
import { connect } from 'react-redux'; 
import InputText from './InputText'; 
import { registerOriginalText, improperInput } from '../../actions/textActions';
import './InputPage.css'; 

class InputPage extends React.Component{

    enterText = ( values ) => {
            if ( values.originalTextInput ){
                this.props.registerOriginalText( values );
                this.props.history.push( "/build-cloze" );
            } else {
                this.props.improperInput(); 
            }
        }

    render() {
        let displayError = this.props.errorMessage ? 
            <p className="errorMessage" >Please Enter Exercise Text</p>:
            null; 

        return (
        <div className="inputContainerDiv">
            <div className="inputCapDiv"></div>
            <div className="inputInnerDiv"> 
                <h2>Input Text:</h2> 
                <p className="inputInstructionParagraph">Add a title and text to create the worksheet:</p>

                { displayError } 
                
                < InputText onSubmit={ this.enterText } /> 
            </div>
        </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    errorMessage: state.reducer.errorMessage
})

export default connect( mapStateToProps, { registerOriginalText, improperInput } )( InputPage );