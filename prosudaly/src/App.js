import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import Enfermedades from './componentes/Enfermedades';
import Demo from './componentes/Cirujia';
import Ginecologia from './componentes/Ginecologia';
import Infarto from './componentes/Infarto'
import Cirujia from './componentes/Cirujia'
import Ambulancia from './componentes/Ambulancia'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a SU DALY</h1>
        </header>
        <div className="jumbotron">
          <p className="lead text-center">Registro de urgencia</p>
          
          <Router>
            <Route path="/demo" component={Demo} />
            <Route path="/ginecologia" component={Ginecologia} />
          </Router>
          
          <div className="col s12 m6 14 x3">
            <Infarto /><Demo />
          </div>
        </div>

      </div>
    );
  }
}
export default App;
