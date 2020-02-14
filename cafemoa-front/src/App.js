import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FullpageWrapper from './pages/FullpageWrapper';
import Latte from './pages/Latte';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Route exact path='/' component={FullpageWrapper}/>
        <Route path='/latte' component={Latte}/>
      </div>
    );
  }
}

export default App;
