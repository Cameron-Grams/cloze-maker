import React from 'react';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf'; 

import './ConfirmCloze.css'; 

class ConfirmCloze extends React.Component{

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf();
        pdf.addImage(imgData, 'JPEG', 0, 0);
//        pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (<div>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="pageSetup"  >
        <div>Note: Here the dimensions of div are same as A4</div> 
        <div>You Can add any component here</div>
      </div>
    </div>);
  }
}   




export default ConfirmCloze; 



/*

render() {
        return (
        <div className="App">
            <header className="App-header">
            <p>Confirm Cloze</p> 
            </header>
        </div>
        );
    }

    */