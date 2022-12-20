import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

class CharacterCardThree extends Component {
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
            <div className="grid grid-cols-3 gap-4">
            {this.state.characterList.map(character => (
                <div className="">
                <div className=" rounded overflow-hidden shadow-lg">
                <img className="w-full" src={character.character_image || 'http://localhost:8000/media/images/dnd.jpeg'} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{character.name}</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
              </div>
            ))}
        </div>
        );
    }
}

export default CharacterCardThree