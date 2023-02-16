import IconEmail from '../images/icon-email.svg'
import IconPhone from '../images/icon-phone.svg'
import IconLocation from '../images/icon-location.svg'
import Logo from '../images/logo.svg'
import '../styles/nav.css'

export const Footer=()=>{
    return(
        <footer className='footer'>
            <div className='form-container'>
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremly generous. If you have any question our support team would be happy to help you.</p>
                <form>
                    <input className='input-text' placeholder='email@example.com' type='text' />
                    <button>Get Started For Free</button>
                </form>
            </div>
            <div className='content'>
                <img className='logo' src={Logo} alt="logo"/>
                <div className='content-info'>
                    <div className='item1'>
                        <img src={IconLocation} alt="location"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='item2'>
                        <ul>
                            <li><img src={IconPhone} alt="phone"/>+1-543-123-4567</li>
                            <li><img src={IconEmail} alt="email"/>example@fylo.com</li>
                        </ul>
                    </div>
                    <div className='item3'>
                        <ul>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                        <ul>
                            <li>Contac Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className='item4'>
                        <ul>
                            <li><ion-icon name="logo-facebook"></ion-icon></li>
                            <li><ion-icon name="logo-twitter"></ion-icon></li>
                            <li><ion-icon name="logo-instagram"></ion-icon></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}