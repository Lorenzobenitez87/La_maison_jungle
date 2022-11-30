import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "La maison jungle"
    return (
    <div className='lmj-banner'>
        <img src={logo} alt='Logo Kasa' className='lmj-logo' />
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
        </div>
        )
}

export default Banner
// default: épargnera d'utiliser les accolades au moment de l'import.