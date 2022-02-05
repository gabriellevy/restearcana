import { lieuxTries } from '../donnees/lieuxPuissance'
import { joueursTries } from '../donnees/joueurs'

function LieuxDePouvoir() {
    let titre = 'Lieux de pouvoir'

    let lieux = lieuxTries
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((value ) => Math.random()>0.5 ? value.lune : value.soleil)

    let nbLieux = 7;
        if (joueursTries.length == 5)
            nbLieux = 7;

    return (
        <div>
        <h2>{titre}</h2>
            <ul>
                {lieux.map((lieu) => (
                    <li>{lieu}</li>
                ))}
            </ul>
            </div>
        )
}

export default LieuxDePouvoir
