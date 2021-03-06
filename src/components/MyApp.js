import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

// Importamos nuestro componente
import Hola from './Hola';

class MyApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <Hola/>
        </div>
      </div>
    );
  }
}

export default MyApp;