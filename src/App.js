import React, { Component } from 'react';
import './App.css';
import TrackList from './components/TrackList';
import HeadSearch from "./components/HeadSearch";

class App extends Component {
  render() {
    return (
      <div>
        <TrackList></TrackList>
      </div>
    );
  }
}

export default App;