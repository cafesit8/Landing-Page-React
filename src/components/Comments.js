import profile1 from '../images/profile-1.jpg'
import profile2 from '../images/profile-2.jpg'
import profile3 from '../images/profile-3.jpg'
import '../styles/nav.css'

export const Comments=()=>{
    return (
        <section className='section4'>
            <div className='content'>
                <div className='content-user'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className='user'>
                        <img src={profile1} alt="profile1"/>
                        <div>
                            <h5>Satish Patel</h5>
                            <span>Founder & CEO, huddle</span>
                        </div> 
                    </div>
                </div>
                <div className='content-user'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className='user'>
                        <img src={profile2} alt="profile2"/>
                        <div>
                            <h5>Satish Patel</h5>
                            <span>Founder & CEO, huddle</span>
                        </div> 
                    </div>
                </div>
                <div className='content-user'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className='user'>
                        <img src={profile3} alt="profile3"/>
                        <div>
                            <h5>Satish Patel</h5>
                            <span>Founder & CEO, huddle</span>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}