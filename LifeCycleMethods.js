import React, {Component} from "react";
import Child from './Child'; 
// import  './style.module.css';


class Parent extends Component {
  constructor() {
    this.state = {
      counter : 0
    }
    console.log(`constructor() ${this.state.counter}`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps() ${state.counter}`);
    return true;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate() ${nextState.counter}`);
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`getSnapshotBeforeUpdate() prevState: ${prevState.counter}`);

    return {name:'arul'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(`componentDidUpdate() ${prevState.counter} and snapshot:  ${JSON.stringify(snapshot)}`);
  }

  componentDidMount() {
    console.log(`ComponentDidMount() ${this.state.counter}`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount() ${this.state.counter}`);
  }


  toggleButton = () => {
    this.setState((state,props) => {
      return {...state, counter : state.counter + 1}
    });
  }




  render() {
    console.log(`render() ${this.state.counter}`);
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <button onClick={this.toggleButton}>update cycle</button>
      </div>

    )
  }
}

export default Parent;
