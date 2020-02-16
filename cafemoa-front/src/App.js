import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Latte from './pages/Latte';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Route path='/' component={Latte}/>
      </div>
    );
  }
}

export default App;
