import React from 'react';
import { connect } from 'react-redux'; 

class LandingPage extends React.Component{
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <div className="landingDiv" >
            <h3>Introduction</h3> 
            <p>This site is a web-based tool for teachers to create Cloze ( fill in the blanks ) exercises.  Advance through the pages
                and complete the following steps:</p>
            <div id="landingListDiv">  
            <ul>
               <li>Chose a title for the exercise and enter the title into the "Exercise Title".</li>
               <li>Copy and paste the original text into the "Exercise Text" area and advance to Build the Cloze.</li>     
               <li>Select the words to remove from the original text and enter as exercise vocabulary words.</li>     
               <li>Add additional vocabulary words that students can consider for the exercise, such as synonyms.</li>     
               <li>Advance to observe the exercise worksheet, return to edit or confirm print.</li>     
               <li>Print the worksheet or save it as a pdf under the selection of the printer.</li>     

            </ul> 
            </div>
            <button className="submitButton" onClick={ e => this.props.history.push( '/input-text' ) } >Advace to Input Text</button>
            </div>
            </header>
        </div>
        );
    }
}

const mapStateToProps = ( state ) => ( {
    ...state
})

export default connect( mapStateToProps, {} )( LandingPage );