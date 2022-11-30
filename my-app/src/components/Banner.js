import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "La maison jungle"
    return (
    <div className='Lmj-banner'>
        <img src={logo} alt='Logo Kasa' className='Lmj-logo' />
        <h1 className='Lmj-title'>{title.toUpperCase()}</h1>
        </div>
        )
}

export default Banner
// default: épargnera d'utiliser les accolades au moment de l'import.