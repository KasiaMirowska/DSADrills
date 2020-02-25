import React from 'react';
import './App.css';

import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchedNum : null,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const{numInput} = e.target;
    console.log(numInput.value)
    this.setState({
      searchedNum: numInput.value
    })
  }
  
 
  render() {
    console.log(this.state.searchedNum)
    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
          <h1>Searching for:</h1>
          <input type='input' id='numInput' />
          <button type='submit'>submit</button>
          </form>
        </div>
        <div>
          <LinearSearch num={this.state.searchedNum}/>
        </div>
        <div>
          <BinarySearch num={this.state.searchedNum}/>
        </div>
      </div>
    );
  }
  
 
}


