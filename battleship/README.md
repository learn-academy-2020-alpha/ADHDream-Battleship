# React BattleShips

## The Setup:
- 3 components
    - App.js
    - Board.js
    - Square.js
- App.js contains the board
- Board.js contains 16 squares represented in state like this:
    ``` javascript
          this.state = { 
          compBoard: [
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", ""],
          userBoard:[
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", "",
                      "", "", "", "", ""],
          compBoardHide:[
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝"],
          userBoardHide:[
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝",
                      "😝", "😝", "😝", "😝", "😝"],
          gameStart: 0,
          userShips: 2,
          compShips: 2,
          shipArray:[],
          userArray:[],
          userTurn: "user",
          userStatus:"",
          hitMessage:""
        }
    ```

## Remember:
- Pseudocode!!
- Ask clarifying questions

## User Stories
- As a player, you will need to press start to begin the game. You will be playing against a computer. 
-  You and the computer have 2 randomized ships that have to be sunk. 
- Choose a square in the computers board to make a guess. If you get a hit, you'll see a ship with an explosion. If not, it will be the computers turn. 
- After your turn, press "Computers turn" for the computer to try guessing. 
- Whoever finds both enemy ships first, will win. 

# terminal
- cd into the correct folder
- yarn start 
