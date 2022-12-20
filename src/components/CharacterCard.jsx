import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

class CharacterCard extends Component {
        state = {
          characterList: []
          };
        
        componentDidMount() {
          this.getCharacterList();
        }
      
        getCharacterList = () => {
          axios
          .get('http://localhost:8000/characters/')
          .then(response => {
            this.setState({
              characterList: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
        }

    render() {
        return (
            <div>
            {this.state.characterList.map(character => (
            <div className="column" key={character.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={character.character_image || 'http://localhost:8000/media/images/dnd.jpeg'}
                    width="300"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{character.name}</p>
                    <p className="subtitle is-6">{character.species}</p>
                  </div>
                </div>

                <div className="content">
                  <p>Is a level {character.level} {character.char_class}.</p>
                  <br />
                  <time dateTime="{character.created_on}">{format(new Date(Date.parse(character.created_on)), "PPpp")}</time>
                </div>
              </div>
            </div>
            </div>
            ))}
        </div>
        );
    }
}

export default CharacterCard