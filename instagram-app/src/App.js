import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import logo from './logo.svg';
import './App.css';

class App extends Component() {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className = "App">
        <SearchBar />
       
      </div>
      );
  };

}

export default App;
