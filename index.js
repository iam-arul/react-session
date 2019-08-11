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
      name: 'React'
    };
  }

  render() { 
    return (
      <div>
        {/* <AppRouter/> */}
        {/* <NestedRouter/> */}
        {/*<Parent/>*/}
        <LifeCycleMethods/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
