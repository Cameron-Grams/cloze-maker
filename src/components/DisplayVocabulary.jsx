import React from 'react';

// the knuth-fisher-yates algorithm: https://bost.ocks.org/mike/shuffle/ 
const scrambleVocab = ( array ) => {
    let lengthArr = array.length, holder, randomVal;

    while ( lengthArr ){
        randomVal = Math.floor( Math.random() * lengthArr-- );
        holder = array[ lengthArr ];
        array[ lengthArr ] = array[ randomVal ];
        array[ randomVal ] = holder;
    }

    return array; 
}

const DisplayVocabulary = ( props ) => {
    
    let displayArray = scrambleVocab( props.vocab );  
    
    return( ( displayArray ).map( ( word, index ) => {
            return(
                <span 
                    className="vocabularySpan" 
                    key={ index } >
                
                    { word }{" "}

                </span>
            )
    }) 
    );
}

export default DisplayVocabulary; 