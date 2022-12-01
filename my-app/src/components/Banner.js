import '../styles/Banner.css'
//import logo from '../assets/logo.png'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
// default: épargnera d'utiliser les accolades au moment de l'import.