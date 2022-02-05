import '../styles/Banner.css'

function Header() {
    const titre = "RTE Arcana"
    return (<h1>{titre}</h1>)
  }

function Banner() {
    return (<div>
        <Header />
    </div>)
}

export default Banner