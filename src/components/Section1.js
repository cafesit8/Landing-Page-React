import img1 from '../images/illustration-intro.png'
import '../styles/nav.css'

export const Section1=()=>{
    return (
        <section className='section1'>
            <div className="img-container">
                <img src={img1} alt="img1"/>
            </div>
            <div className='info'>
                <h1>All your files in one secure location,<br/> accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location</p>
                <p>Acces them wherever you need, share and collaborate with friends, family and co-workers</p>
                <button>Get Started</button>
            </div>
        </section>
    )
}