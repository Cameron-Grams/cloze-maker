import React from 'react';
import { Field, reduxForm } from 'redux-form'; 

let InputText = ( props ) => {
    return(
        <div className="overallFormDiv" >  
        <form className="textForm" onSubmit={ props.handleSubmit } >
            <div>< Field className = "textTitle generalInput" name="textTitleInput" component={ "input" } placeholder="Exercise Title"   /></div>
            <div>< Field className = "textField generalInput" name="originalTextInput" component={ "textarea" } placeholder="Exercise Text"   /></div>
            <button className="submitButton" type="submit" >Next Step</button>
        </form>
        </div>
    )
}

InputText = reduxForm({
    form: 'InputText'
})( InputText );

export default InputText;