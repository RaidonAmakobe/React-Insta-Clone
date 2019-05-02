import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filteredPosts: []
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
