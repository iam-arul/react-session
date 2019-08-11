import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter';
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
        <Parent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
