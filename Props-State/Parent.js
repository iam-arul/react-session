import React, {Component} from "react";
import Child from './Child'; 
import  './style.module.css';


class Parent extends Component {
  constructor() {
    this.state = {
      toggle : false
    }
  }

  toggleButton = () => {
    this.setState((state,props) => {
      return {...state, toggle : !state.toggle}
    });
  }




  render() {
    const toggleClass = this.state.toggle ? 'on' : 'off';
    // const toggleStyle = {
    //   padding : '10px',
    //   borderRadius : '5px',
    //   color : 'white',
    //   border : 0,
    //   backgroundColor : this.state.toggle ? 'green' : 'red',
    //   cursor : 'pointer',
    //   outline : 'none'
    // }
    return (
      <div>
        <h1>From Parent</h1>
        <button className={`buttonClass ${toggleClass}`} onClick={this.toggleButton}>Toggle</button>
        <Child toggleState = {this.state.toggle}/>
      </div>

    )
  }
}

export default Parent;
