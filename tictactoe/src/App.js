import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js'

class App extends Component {
    constructor(props) {
        super(props)
        }
  render() {
    return (
     <div>
     <Board />
      </div>
    );
  }
}

export default App;
