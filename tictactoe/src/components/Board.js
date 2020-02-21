import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
        //define the array array that the user start with
          this.state = {
              array: ["", "", "", "", "", "", "", "", ""],
              userStatus: "",
              mark: "⭕️",
              counter: 0
        }
    }
    
    handleLocation = (index) => {
         let {array, userStatus, mark, counter} = this.state
         if(mark === "⭕️"){
             this.setState({mark: "❌"})
         } else{
             this.setState({mark: "⭕️"})
         }
         if (array[index] === "") {
         array[index] = mark
         let x = counter +1
         this.setState({counter: x})
          if (x > 8) {
            this.setState({userStatus: "Tie!"})
        }}
         
        
        if (array[0] === array[1] && array[1] === array[2] && array[2] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[3] === array[4] && array[4] === array[5] && array[5] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[6] === array[7] && array[7] === array[8] && array[8] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[0] === array[4] && array[4] === array[8] && array[8] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[2] === array[4] && array[4] === array[6] && array[6] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[0] === array[3] && array[3] === array[6] && array[6] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[1] === array[4] && array[4] === array[7] && array[7] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[2] === array[5] && array[5] === array[8] && array[8] ==="⭕️") {
            this.setState({userStatus: "player 1 won!"})
        } else if (array[0] === array[1] && array[1] === array[2] && array[2] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[3] === array[4] && array[4] === array[5] && array[5] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[6] === array[7] && array[7] === array[8] && array[8] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[0] === array[4] && array[4] === array[8] && array[8] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[2] === array[4] && array[4] === array[6] && array[6] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[0] === array[3] && array[3] === array[6] && array[6] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[1] === array[4] && array[4] === array[7] && array[7] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } else if (array[2] === array[5] && array[5] === array[8] && array[8] ==="❌") {
            this.setState({userStatus: "player 2 won!"})
        } 
        
}

//Resetting the Game
    resetGame = () => {
        let {array,userStatus, mark} = this.state
        array = array.map(value => value = "")
        this.setState({
            array: array,
            userStatus: "",
            mark: "⭕️",
            counter: 0
        })
    }


  render() {
    let { array, userStatus } = this.state
    let square = array.map((value, index) => {
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
