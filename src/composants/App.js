import {useState, useEffect} from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Table from './Table'
import LieuxDePouvoir from './LieuxDePouvoir'
import { joueursTries } from '../donnees/joueurs'

function App() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function removeItem(key) {
    var filteredPlayers = joueurs.filter(function (item) {
        return (item.key !== key);
    });
    filteredPlayers = randomizePlayers(filteredPlayers);
    filteredPlayers = setFirstPlayer(filteredPlayers);
    updateJoueurs(filteredPlayers);
  }

  function addPlayer(e) {
    if (e !== "") {
        var player = {
            name: e,
            firstplayer: false,
            key: Date.now()
        };

        let p = joueurs.concat(player);
        p = randomizePlayers(p);
        p = setFirstPlayer(p);
        updateJoueurs(p);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App">
      <Banner/><br/>
      <div>
        <Table joueurs={joueurs} updateJoueurs={updateJoueurs} handleRemovePlayer={removeItem} handleAddPlayer={addPlayer} />
        <LieuxDePouvoir nbJoueurs={joueurs.length}/>
      </div>
    </div>
  );
}

export default App;
