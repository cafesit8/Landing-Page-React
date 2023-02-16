import Logo from '../images/logo.svg'
import '../styles/nav.css'

export const Nav=()=>{
    return (
        <nav className='nav'>
            <img className='logo' src={Logo} alt="logo"/>
            <ul>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Sign In</a></li>
            </ul>
            <ion-icon name="menu"></ion-icon>
        </nav>
    )
}