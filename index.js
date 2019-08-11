import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter';
import LifeCycleMethods from './LifeCycleMethods';
import NestedRouter from './NestedRouter';
import Parent from './Props-State/Parent';

import './style.css';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      name: 'React',
      isVisible : true
    };
  }

 toggleButton = () => {
    this.setState((state,props) => {
      return {...state, isVisible : !state.isVisible}
    });
  }

  render() { 
    return (
      <div>
        {/* <AppRouter/> */}
        {/* <NestedRouter/> */}
        {/*<Parent/>*/}
        {this.state.isVisible ? <LifeCycleMethods/> : null}
        <button onClick={this.toggleButton}>Remove LifeCycleMethods</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
