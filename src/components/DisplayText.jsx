import React from 'react'; 

const DisplayText = ( props ) => ( props.allParagraphs ).map( ( paragraphArray, pindex ) => {

    let DisplayParagraph = paragraphArray.map( item => {

            return(  <span 
                        className="wordSpan" 
                        id={ `paragraph_${ item.paragraph }_word_${ item.position }` } 
                        key={ item.position } 
                        onClick={ event => props.onClick( item.paragraph, item.position ) } 
                        value={ item.displayText }>
                        { item.displayShowing }{ " " } 
                    </span> )
            } ); 
        
        return(
            <p className={ props.className } key={ pindex }>{ DisplayParagraph }</p>
        )
    })

export default DisplayText; 