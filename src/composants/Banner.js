import '../styles/Banner.css'

import img_titre from '../images/titre.png'

function Banner() {
    return (<div>
        <img src={img_titre} className="banniere" alt='Banner'/>
    </div>)
}

export default Banner