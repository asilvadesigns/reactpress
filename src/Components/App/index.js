import React from 'react';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World! {this.props.name}</h1>
      </div>
    )
  }
}

export default App;
