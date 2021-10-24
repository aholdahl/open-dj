import React, { Component } from 'react';
import './App.css';
import TagTypeInput from '../TagType/TagTypeInput';
import TagTypeTable from '../TagType/TagTypeTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <TagTypeInput />
        <TagTypeTable />
      </div>
    )
  }
}

export default App;