# React Tic Tac Toe

## The Setup:
- 3 components
    - App.js
    - Board.js
    - Square.js
- App.js contains the board
- Board.js contains 9 squares represented in state like this:
    ``` javascript
    this.state = {
    array: ["", "", "", "", "", "", "", "", ""],
              userStatus: "",
              mark: "⭕️",
              counter: 0
    }
    ```

## Remember:
- Pseudocode!!
- Ask clarifying questions

## User Stories
- This is a two player game. The first player will have O and player two will have the X. 
- As a player, I click on a square and try to get three of my symbol in a row. 
- If no one gets the three symbols in a row, then its a tie. 

# terminal
- cd into the correct folder
- yarn start 
