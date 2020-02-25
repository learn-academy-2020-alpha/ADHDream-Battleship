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
              counter: 5,
              startGame: 0,
              symbolState: "?"
          }
    }

    //handleLocation method changes the spaces 
    handleLocation = (index) => {
         let {spaces, answer, userStatus, counter, startGame, symbolState} = this.state
         //update the value of square that you click on match the value of 'answer' array value with the same index.
         if(startGame){
         spaces[index] = answer[index]
         this.setState({
             spaces: spaces,
             answer: answer,
             counter: --counter
         })
         if(spaces[index] === "💉"){
             this.setState({userStatus: "You lost! Your cow got addicted to METH!! 🤢", symbolState: "💉" })

         } else if(spaces[index] === "📕"){
             this.setState({userStatus: "You won! Your cow got addicted to MATH!! 📕", symbolState: "📕"})
         } else if(counter === 0){
             this.setState({userStatus: "You ran out of turns!", symbolState: "???"})
         }
         console.log(answer)
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
            userStatus: "",
            startGame: 0,
            symbolState: "?"

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
        answer[randomTreasure] = "📕"

        //Updating the displayed state as user plays the game
        this.setState({answer:answer})
        console.log(answer)
        this.setState({startGame: 1})
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
    <br/>
        <h1>M{this.state.symbolState}th Cow</h1>
     <div className = "board">
        {square}
        
        
        <br/>
        
      </div>
      <div>
        <p className = "status">{this.state.userStatus}</p> 
        </div>
            <div className = "item-center">

            <button className="button" onClick = {this.randomize}> Start Game</button>
            <button className="button" onClick = {this.resetGame}> Reset Game</button>
        
            <p>Counter:{this.state.counter}</p>
            </div>
       
      </>
    );
  }
}

export default Board
