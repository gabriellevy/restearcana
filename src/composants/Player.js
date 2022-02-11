import { React } from 'react';

function Player(props) {
  const firstplayer_string = '1er => ';

  function remove(key) {
    props.handleRemove(key);
  }
 
  return (
    <li key={props.joueur.key} onClick={() => remove(props.joueur.key)}>{props.joueur.firstplayer?firstplayer_string + props.joueur.name:props.joueur.name}</li>
  )
};
 
export default Player;