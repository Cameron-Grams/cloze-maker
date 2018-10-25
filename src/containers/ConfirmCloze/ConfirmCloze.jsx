import React from 'react';
import ReactToPrint from 'react-to-print';
import FormToPrint from './FormToPrint'; 
import './ConfirmCloze.css';

class ConfirmCloze extends React.Component {
  render() {
    return (
      <div  >
        <div  id="buttonDiv" >
        <ReactToPrint
          trigger={() => <div ><button className="printButton" >Print this out!</ button ></div> }
          content={() => this.componentRef}
        />
        <button className="printButton" >Return to editing</button>
        </div>
        <FormToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}


export default ConfirmCloze; 



// scramble the vocabulary before printing  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// also work on the colors  http://colormind.io/bootstrap/ 