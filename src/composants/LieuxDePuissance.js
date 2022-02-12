import { lieuxTries } from '../donnees/lieuxPuissance'
import '../styles/LieuxDePuissance.css';

function LieuxDePuissance(props) {
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
            <ul className='lieuxDePuissance_ul'>
                {lieux.map((lieu, index) => (
                    <li key={index} className='lieuxDePuissance_li'>
                        <img key={index} src={lieu.img} alt={lieu.txt} className='lieuxDePuissance_img'/>
                    </li>
                ))}
            </ul>
        </div>
        )
}

export default LieuxDePuissance
