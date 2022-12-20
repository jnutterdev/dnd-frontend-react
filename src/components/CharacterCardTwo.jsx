import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

class CharacterCardTwo extends Component {
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
                <div key={character.id} className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${character.character_image})` }} title={character.name} >
                    </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{character.name}</div>
                    <p className="text-gray-700 text-base">{character.name} is a level {character.level} {character.species} {character.char_class}. This character speaks Common and has X HP.</p>
                  </div>
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={character.character_image || 'http://localhost:8000/media/images/dnd.jpeg'} alt="dnd avatar" />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
            </div>
            ))}
        </div>
        );
    }
}

export default CharacterCardTwo