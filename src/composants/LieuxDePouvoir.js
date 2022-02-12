import { lieuxTries } from '../donnees/lieuxPuissance'
import '../styles/LieuxDePuissance.css';

function LieuxDePouvoir(props) {
    const titre = 'Lieux de pouvoir';
    const {nbJoueurs} = props;
    let lieux = lieuxTries
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((value ) => Math.random()>0.5 ?  value.lune : value.soleil)

    let nbLieux = 7;
    switch(nbJoueurs){
        case 2:
            nbLieux = 4;
            break;
        case 3:
            nbLieux = 5;
            break;
        case 4:
            nbLieux = 6;
            break;
        case 5:
            nbLieux = 7;
            break;
        default:
            nbLieux = 0;
            break;
    }
    
    lieux = lieux.slice(0, nbLieux);

    return (
        <div>
            <h2 className= "text-center" >{titre}</h2>
            <div className="row">
            {lieux.map((lieu, index) => (
                <div className="col-6 col-md-3 p-2">
                    <img className="img-fluid img-thumbnail rounded" key={index} src={lieu.img} alt={lieu.txt}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default LieuxDePouvoir
