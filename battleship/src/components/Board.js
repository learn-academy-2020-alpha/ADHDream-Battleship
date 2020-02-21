import React, { Component } from 'react';
import Game from './Game'
class Board extends Component {
    constructor(props) {
        super(props)

        //define the display array that the user start with
          this.state = {
            display: [ "", "", "", "", 
                       "", "", "", "", 
                       "", "", "", "", 
                       "", "", "", ""
                    ],
            playerA: [ "", "", "", "", 
                       "", "", "", "", 
                       "", "", "", "", 
                       "", "", "", ""
                    ],
            computerA:[ "", "", "", "", 
                        "", "", "", "", 
                        "", "", "", "", 
                        "", "", "", ""
                     ],
              userStatus: "",
              mark: "X",
              missed: ":("
          }
    }

    //randomize PlayerA function
randomizePlayerA = () =>{
    let { playerA } = this.state
    let randomShip1= Math.floor(Math.random() * playerA.length)
    playerA[randomShip1] = "x"
    playerA[randomShip1 + 1]
    
}

    handleLocation = (index) => {
         let {display, playerA, computerA, userStatus} = this.state
         //update the value of square that you click on match the value of 'answer' array value with the same index.
         display[index] = computerA[index]
         this.setState({
             display: display,
             playerA: playerA
         })
         if(display[index] === "💉"){
             this.setState({userStatus: "Your cow got METH! 🤢"})

         } else if(display[index] === "💰"){
             this.setState({userStatus: "Your cow got MONEY 🤑"})
         }

    }

//Resetting the Game
    resetGame = () => {
        let {display, answer, userStatus} = this.state
        display = display.map(value => value = "🐄")
        answer = answer.map(value => value = "🐮")
        this.setState({
            display: display,
            answer: answer,
            userStatus: ""
        })
    }


//Decide the random bomb and treasure location once the page is loaded automatically
    randomize = () => {
        let { display,answer } = this.state
        let randomTreasure = Math.floor(Math.random() * display.length)
        let randomBomb = Math.floor(Math.random() * display.length)
        while(randomTreasure === randomBomb){
                randomTreasure = Math.floor(Math.random() * display.length)
            }
        answer[randomBomb] = "💉"
        answer[randomTreasure] = "💰"

        //Updating the displayed state as user plays the game
        this.setState({answer:answer})
        console.log(answer)
  }

  render() {
    let { display, userStatus } = this.state
    let square = display.map((value, index) => {
        return (
            <>
    <div>
        <Game
        handleLocation = {this.handleLocation}
        randomize = {this.randomize}
        index = { index }
        value = { value }
        userStatus = {userStatus}
        /> 
    </div>
    </>)})

        



    return (
    <>
     <div className = "board">
        {square}
        <button onClick = {this.randomize}> Start Game</button>
        <button onClick = {this.resetGame}> Reset Game</button>
        <p>{this.state.userStatus}</p>
      </div>
      </>
    );
  }
}

export default Board
