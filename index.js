import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter';
import NestedRouter from './NestedRouter';
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
        <NestedRouter/> 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
