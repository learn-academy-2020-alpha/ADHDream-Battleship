import React, { Component } from 'react';
class Square extends Component {

handleClick = () => {
    if(this.props.userStatus === ""){
    this.props.handleLocation(this.props.index)
  }
}

  render() {


    return (
     <div id="square" onClick = {this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}


export default Square
