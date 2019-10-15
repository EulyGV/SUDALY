import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component { 

  constructor(){

    super();

    this.state = {
      count : 0,
      result : 0,
      number1 : 0,
      number2 : 0,
    };

    this.handleResultsClick =  this.handleResultsClick.bind(this);
    this.handleCountClick =  this.handleCountClick.bind(this);
    this.handleInputChanged =  this.handleInputChanged.bind(this);
    
  }

  componentDidMount(){

    this.setState({
      //count : 0,
      //result : 0,
      //number1 : 0,
      //number2 : 0
    });

  }


  handleCountClick(e){

    if(e.target.id === 'add'){
      this.setState({
        count : this.state.count + 1 
      });

    }else if(e.target.id === 'subtract' && this.state.count > 0){
      this.setState({
        count : this.state.count - 1 
      });

    }else if(e.target.id === 'reset'){
      this.setState({
        count : 0 
      });

    }

  }

  
  handleResultsClick(e){
    this.setState({
      result: this.state.number1 + this.state.number2
    })  
  }

  handleInputChanged(e){

    if(e.target.id === 'number1'){
      this.setState({
        number1 : Number(e.target.value)
      });
    }else{
      this.setState({
        number2 : Number(e.target.value)
      });
    }

  }


  
  render() {
    return (
      <div className="Content">
        <h1>Hola soy contenido</h1>
        <br></br>   
        <p>Counter :{this.state.count}</p>

        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>


        <p>Calculadora</p>

        <p>
          <input id="number1" type="number" value={ this.state.number1} onChange={this.handleInputChanged}></input>          +
          <input id="number2" type="number" value={ this.state.number2} onChange={this.handleInputChanged}></input>
          <button id="on" onClick={this.handleResultsClick}>Result</button>
          
        <p>Total :{this.state.result}</p>
        </p>
      </div>
    );
  }
}

export default Content;