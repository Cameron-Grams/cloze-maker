import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage'; 
import InputPage from './containers/InputPage';
import BuildCloze from './containers/BuildCloze';
import ConfirmCloze from './containers/ConfirmCloze'; 

import './App.css';

class App extends Component {
  render() {
    return (
      < BrowserRouter >
        < Switch >
            < Route exact path="/" component={ LandingPage } />         
             < Route exact path="/input-text" component={ InputPage } />       
             < Route exact path="/build-cloze" component={ BuildCloze } />
             < Route exact path="/confirm-cloze" component={ ConfirmCloze } />
        </Switch> 
      </BrowserRouter>   
    );
  }
}

export default App;
