import Player from './Player.js'
import PlayerDialog from './Dialogs/PlayerDialog.js'


function Table(props) {
    const titre = 'Ordre des joueurs'
    const {joueurs, handleRemovePlayer, handleAddPlayer} = props;

    return (
        <div>
            <h2>{titre}</h2>
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