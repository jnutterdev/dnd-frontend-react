import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'

import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import CharacterCardTwo from './components/CharacterCardTwo';
import CharacterCardThree from './components/CharacterCardThree';

class App extends Component {

  render() {
    return (
      <div className="container is-widescreen">
        <Navbar />
        <article className="message">
          <div className="message-header">
            <p>Character collection</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
        <section className="section">
            <CharacterCardThree />
        </section>
        <footer>
          <div className="footer">
            &copy; 2022 <a href="https://withonlyamap.com">withonlyamap </a>
          </div>
        </footer>
      </div>
    );
  } 
}

export default App;