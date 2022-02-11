import {useState, useEffect} from 'react';
import { joueursTries } from '../donnees/joueurs'
import Player from './Player.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function Table() {
    const titre = 'Ordre des joueurs'
    const [joueurs, updateJoueurs] = useState(joueursTries.map(function(cur, index) {
        return {
            name: cur,
            firstplayer: false,
            key: index
        };
    }));

    useEffect(() => {
        let p = joueurs;
        p = randomizePlayers(p);
        p = setFirstPlayer(p);
        updateJoueurs(p);
    }, [])

    function randomizePlayers(players) {
      return players.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    }

    function setFirstPlayer(players) {
        if(players.length < 1) return players;
        
        let p = players.map((value)=> {
            return {
                name: value.name,
                firstplayer: false,
                key: value.key
            }
        });
        let indexNumUn = getRandomInt(p.length);
        p[indexNumUn].firstplayer = true;
        return p;
    }

    function handleRemove(key) {
        var filteredPlayers = joueurs.filter(function (item) {
            return (item.key !== key);
        });
        filteredPlayers = randomizePlayers(filteredPlayers);
        filteredPlayers = setFirstPlayer(filteredPlayers);
        updateJoueurs(filteredPlayers);
    }

    function addItem(e) {
        const name = document.getElementById("player_input").value;
        if (name !== "") {
          var player = {
            name: name,
            firstplayer: false,
            key: Date.now()
          };

          let p = joueurs.concat(player);
          p = randomizePlayers(p);
          p = setFirstPlayer(p);
          updateJoueurs(p);
          document.getElementById("player_input").value = "";
        }
      }


    return (
        <div>
          <h2>{titre}</h2>
          <input id="player_input" name="My button" placeholder="Your name here."/>
          <button type="submit" onClick={addItem}>add</button>
          <ul>
            {joueurs.map((joueur) => (
                <Player joueur={joueur} handleRemove={handleRemove}/>
            ))}
          </ul>
        </div>
        )
}

export default Table