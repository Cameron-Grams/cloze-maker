import React from 'react';
import { Field, reduxForm } from 'redux-form'; 

let AddVocabularyWords = ( props ) => {
    return(
        <form onSubmit={ props.handleSubmit } >
            <div>< Field className = "newVocab" name="additionalVocabulary" component={ "input" } placeholder="Enter Additonal Vocabulary Words"   /></div>
            <button className="submitButton" type="submit" >Add Vocabulary Words</button>
        </form>
    )
}

AddVocabularyWords = reduxForm({
    form: 'moreVocab'
})( AddVocabularyWords );

export default AddVocabularyWords;



