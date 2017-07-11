import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import CardDisplay from './components/carddisplay/CardDisplay'

class App extends Component {
  render() {
    return (
    <div>
      <Navigation />
      <Hero />
      <CardDisplay />
    </div>
    );
  }
}

export default App;
