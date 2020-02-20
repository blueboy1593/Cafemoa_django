import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Latte from './pages/Latte';
import FullpageWrapper from './pages/FullpageWrapper';
/* global screen */
/* eslint no-restricted-globals: ["off"] */

class App extends Component{
  render(){
    // console.log(this)
    const width = screen.width
    if (width > 500) {
      return (
        <div className="App">
          <Route exact path='/' component={FullpageWrapper}/>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Route path='/' component={Latte}/>
        </div>
      );
    }
  }
}

export default App;
