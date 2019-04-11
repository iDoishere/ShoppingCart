import React, { Component } from 'react';
 import Header from './components/Header/Header'
 import SocialMedia from './containers/SocialMedia/SocialMedia'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
     <Header/>
     <SocialMedia/>
      </div>
    );
  }
}

export default App;
