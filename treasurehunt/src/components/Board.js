import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)

        //define the spaces array that the user start with
          this.state = {
              spaces: ["🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄"],
              answer:["🐮", "🐮", "🐮", "🐮", "🐮", "🐮", "🐮", "🐮", "🐮"],
              userStatus: "",
              counter: 5
          }
    }
    handleLocation = (index) => {
         let {spaces, answer, userStatus, counter} = this.state
         //update the value of square that you click on match the value of 'answer' array value with the same index.
         spaces[index] = answer[index]
         this.setState({
             spaces: spaces,
             answer: answer,
             counter: --counter
         })
         if(spaces[index] === "💉" || counter === 0){
             this.setState({userStatus: "Your cow got METH! 🤢"})

         } else if(spaces[index] === "💰"){
             this.setState({userStatus: "Your cow got MONEY 🤑"})
         }

    }

//Resetting the Game
    resetGame = () => {
        let {spaces, answer, counter, userStatus} = this.state
        spaces = spaces.map(value => value = "🐄")
        answer = answer.map(value => value = "🐮")
        this.setState({
            spaces: spaces,
            answer: answer,
            counter: 5,
            userStatus: ""
        })
    }


//Decide the random bomb and treasure location once the page is loaded automatically
    randomize = () => {
        let { spaces,answer } = this.state
        let randomTreasure = Math.floor(Math.random() * spaces.length)
        let randomBomb = Math.floor(Math.random() * spaces.length)
        while(randomTreasure === randomBomb){
                randomTreasure = Math.floor(Math.random() * spaces.length)
            }
        answer[randomBomb] = "💉"
        answer[randomTreasure] = "💰"

        //Updating the displayed state as user plays the game
        this.setState({answer:answer})
        console.log(answer)
  }

  render() {
    let { spaces,answer, counter, userStatus } = this.state
    let square = spaces.map((value, index) => {
        return (
        <Square
        handleLocation = {this.handleLocation}
        randomize = {this.randomize}
        index = { index }
        value = { value }
        userStatus = {userStatus}
        counter = { counter }
        /> )})



    return (
    <>
    <div> Counter:{this.state.counter}</div>
    <br/>
     <div className = "board">
        {square}
        <button onClick = {this.randomize}> Start Game</button>
        <button onClick = {this.resetGame}> Reset Game</button>
        <br/>
        <p>{this.state.userStatus}</p>
      </div>
      </>
    );
  }
}

export default Board
