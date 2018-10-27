import React from 'react';
import { connect } from 'react-redux'; 
import ReactToPrint from 'react-to-print';
import FormToPrint from './FormToPrint'; 
import './ConfirmCloze.css';

class ConfirmCloze extends React.Component {
  render() {
    return (
      <div  >
        <div  id="buttonDiv" >
        <ReactToPrint
          trigger={() => <div ><button className="clozeButton submitButton" >Print this out!</ button ></div> }
          content={() => this.componentRef}
        />
        <button className="clozeButton submitButton" onClick={ e => this.props.history.push( 'input-text' ) } >Return to editing</button>
        </div>
        <FormToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}


export default connect()( ConfirmCloze ); 



// scramble the vocabulary before printing  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// also work on the colors  http://colormind.io/bootstrap/ 