import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)

        //define the array1 array that the user start with
          this.state = {
              array1: ["", "", "", "", "", "", "", "", ""],
              array2:["", "", "", "", "", "", "", "", ""],
              userStatus: "",
          }
    }
    handleLocation = (index) => {
         let {array1, array2, userStatus} = this.state
    }

//Resetting the Game
    resetGame = () => {
        let {array1, array2,userStatus} = this.state
        array1 = array1.map(value => value = "")
        array2 = array2.map(value => value = "")
        this.setState({
            array1: array1,
            array2: array2,
            userStatus: userStatus
        })
    }


//Decide the random bomb and treasure location once the page is loaded automatically
    userSelect = () => {
       //write code here
  }

  render() {
    let { array1,array2, userStatus } = this.state
    let square = array1.map((value, index) => {
        return (
        <Square
        handleLocation = {this.handleLocation}
        index = { index }
        value = { value }
        userStatus = {userStatus}
        /> )})



    return (
    <>
    <br/>
     <div className = "board">
        {square}
        <button onClick = {this.resetGame}> Reset Game</button>
        <br/>
        <p>{this.state.userStatus}</p>
      </div>
      </>
    );
  }
}

export default Board
