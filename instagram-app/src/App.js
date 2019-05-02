import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
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
        <PostContainer />
      </div>
      );
  };

}

export default App;
