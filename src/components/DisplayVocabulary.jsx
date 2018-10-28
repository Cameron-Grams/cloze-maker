import React from 'react';

const DisplayVocabulary = ( props ) => ( props.vocab ).map( ( word, index ) => {
            return(
                <span 
                    className="vocabularySpan" 
                    key={ index } >
                
                    { word }{" "}

                </span>
            )
})

export default DisplayVocabulary; 