import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'

import CharacterCard from './components/CharacterCard';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="columns">
          <CharacterCard />
        </div>
      </div>
    );
  } 
}

export default App;