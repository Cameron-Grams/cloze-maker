import React from 'react';
import { connect } from 'react-redux'; 
import { resetExercise } from '../../actions/textActions'; 
import ReactToPrint from 'react-to-print';
import FormToPrint from './FormToPrint'; 
import './ConfirmCloze.css';

class ConfirmCloze extends React.Component {
  constructor( props ){
    super( props );
    this.startNew = this.startNew.bind( this ); 
  }

  startNew(){
    this.props.history.push( 'input-text' ); 
    this.props.resetExercise();
  }

  render() {
    return (
      <div  >
        <div  id="buttonDiv" >
        <button className="clozeButton submitButton" onClick={ e => this.startNew() } >Start Over</button>
        <ReactToPrint
          trigger={() => <div ><button className="clozeButton submitButton" >Print this out!</ button ></div> }
          content={() => this.componentRef}
        />
        <button className="clozeButton submitButton" onClick={ e => this.props.history.push( 'build-cloze' ) } >Return to editing</button>
        </div>
        <FormToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  ...state
})

export default connect( mapStateToProps, { resetExercise })( ConfirmCloze ); 



// scramble the vocabulary before printing  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// also work on the colors  http://colormind.io/bootstrap/ 