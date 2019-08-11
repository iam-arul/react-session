import React, {Component} from "react";
import Child from './Child'; 

class Parent extends Component {
  constructor() {
    this.state = {
      toggle : false
    }
  }

  toggleButton = () => {
    this.state()
  }



  render() {
    return (
      <div>
        <h1>From Parent</h1>
        <button onClick={this.toggleButton()}>Toggle</button>
        <Child toggleState = {}/>
      </div>

    )
  }
}

export default Parent;
