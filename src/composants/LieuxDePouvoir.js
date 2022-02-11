import { lieuxTries } from '../donnees/lieuxPuissance'
import { joueursTries } from '../donnees/joueurs'
import '../styles/LieuxDePuissance.css';

function LieuxDePouvoir() {
    let titre = 'Lieux de pouvoir'

    let lieux = lieuxTries
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((value ) => Math.random()>0.5 ?  value.lune : value.soleil)

    let nbLieux = 7;
    if (joueursTries.length === 2)
        nbLieux = 4;
    else if (joueursTries.length === 3)
        nbLieux = 5;
    else if (joueursTries.length === 4)
        nbLieux = 6;
    else if (joueursTries.length === 5)
        nbLieux = 7;
    
    lieux = lieux.slice(0, nbLieux);

    return (
        <div>
        <h2>{titre}</h2>
                {lieux.map((lieu, index) => (
                        <img key={index} src={lieu.img} alt={lieu.txt}/>
                ))}
            </div>
        )
}

export default LieuxDePouvoir
