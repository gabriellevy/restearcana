import { React } from 'react';

function Player(props) {
  const firstplayer_string = '1er => ';
  const {handleRemovePlayer} = props
 
  return (
    <div className="Player">
      <li onClick={() => handleRemovePlayer(props.joueur.key)}>
        {props.joueur.firstplayer?firstplayer_string + props.joueur.name:props.joueur.name}
      </li>
    </div>
  )
};
 
export default Player;