import React from 'react';
import { Field, reduxForm } from 'redux-form'; 

let InputText = ( props ) => {
    return(
        <form onSubmit={ props.handleSubmit } >
            <div>< Field className = "textField" name="originalTextInput" component={ "textarea" } placeholder="Enter Text"   /></div>
            <button className="submitButton" type="submit" >Input Text</button>
        </form>
    )
}

InputText = reduxForm({
    form: 'InputText'
})( InputText );

export default InputText;