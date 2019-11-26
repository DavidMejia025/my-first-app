import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };

    this.getText = this.getText.bind(this);
  }

  getText(e){
    var string = e.target.value;

    this.setState({ count: string.length });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.getText}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
