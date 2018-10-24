import React from 'react';
import ReactToPrint from 'react-to-print';
import './ConfirmCloze.css';

class ComponentToPrint extends React.Component{
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <div id="printComponentDiv">  
                <h1>Title of the Worksheet</h1>
                <p>Confirm Cloze content</p> 
            </div>
            </header>
        </div>
        );
    }

}

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
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default ConfirmCloze; 




// scramble the vocabulary before printing  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
