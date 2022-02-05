import { joueursTries } from '../donnees/joueurs'


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function Table() {
    let titre = 'Ordre des joueurs'
    let joueurs = joueursTries
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    let indexNumUn = getRandomInt(joueurs.length)
    joueurs[indexNumUn] = '1er => ' + joueurs[indexNumUn]

    return (
        <div>
        <h2>{titre}</h2>
            <ul>
                {joueurs.map((joueur) => (
                    <li>{joueur}</li>
                ))}
            </ul>
        </div>
        )
}

export default Table