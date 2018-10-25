import React from 'react';
import { connect } from 'react-redux'; 

class LandingPage extends React.Component{
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <p>Landing Page</p> 
            <button onClick={ e => this.props.history.push( '/input-text' ) } >Advace to Input Text</button>
            </header>
        </div>
        );
    }
}

const mapStateToProps = ( state ) => ( {
    ...state
})

export default connect( mapStateToProps, {} )( LandingPage );