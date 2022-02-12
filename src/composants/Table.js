import Player from './Player.js'
import PlayerDialog from './Dialogs/PlayerDialog.js'


function Table(props) {
    const {joueurs, handleRemovePlayer, handleAddPlayer} = props;

    return (
        <div>
            <PlayerDialog handleAddPlayer={handleAddPlayer}/>
            <ul>
                {joueurs.map((joueur) => (
                    <Player key={joueur.key} joueur={joueur} handleRemovePlayer={handleRemovePlayer}/>
                ))}
            </ul>
        </div>
    )
}

export default Table