import '../styles/Header.css'
import logo from '../images/logo.png'
function Header() {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} width={40} height={40} />
            </div>
            <div className='header-options'>
                <span>Accueil</span>
                <span>Blog</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default Header