import icon1 from '../images/icon-access-anywhere.svg'
import icon2 from '../images/icon-any-file.svg'
import icon3 from '../images/icon-collaboration.svg'
import icon4 from '../images/icon-security.svg'
import '../styles/nav.css'

export const Section2=()=>{
    return (
        <section className='section2'>
            <article className='content'>
                <div>
                    <img src={icon1} alt="icon"/>
                    <h2>Acces your files, anywhere</h2>
                    <p>The ability to use a smartphone, tablet or computer to acces your accounts means your files follow you everywhere.</p>
                </div>
                <div>
                    <img className='img2' src={icon4} alt="icon"/>
                    <h2>Security you can trust</h2>
                    <p>2-factor authentication and user-controller and encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>
                <div>
                    <img src={icon3} alt="icon"/>
                    <h2>Real-time collaboration</h2>
                    <p>Securelly share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>
                <div>
                    <img src={icon2} alt="icon"/>
                    <h2>Store any type of file</h2>
                    <p>Whether you're sharing holidays photos or work documents, fylo has you covered allowing for all file types to be securely stored and shared</p>
                </div>
            </article>
        </section>
    )
}