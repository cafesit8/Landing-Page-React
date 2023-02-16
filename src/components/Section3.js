import img from '../images/illustration-stay-productive.png'
import img2 from '../images/icon-arrow.svg'
import '../styles/nav.css'

export const Section3=()=>{
    return(
        <section className='section3'>
            <div className='container'>
                <div className='img-container'>
                    <img src={img} alt="img"/>
                </div>
                <div className='info'>
                    <h2>Stay productive,<br/> wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
                    <p>Securelly share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <button>See how Fylo works <img src={img2} alt="icon"/></button>
                </div>
            </div>
        </section>
    )
}