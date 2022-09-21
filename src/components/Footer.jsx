import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer> 
        <div className="container footer_container">
            <article>
                <Link to ='/' className='logo'> 
                <h2> Emma</h2>
               {/*} <img src={Logo} alt='FooterLogo'/>*/}
                
                </Link>
                <p> Connect with US</p>
                <div className="footer_socials">
                    <a href='https//linkedin.com' target ="_blank" rel='noreferrer noopener'><FaLinkedin/> </a>
                    <a href='https//facebook.com' target ="_blank" rel='noreferrer noopener'><FaFacebook/> </a>
                    <a href='https//instagram.com' target ="_blank" rel='noreferrer noopener'><FaInstagram/> </a>
                    <a href='https//twitter.com' target ="_blank" rel='noreferrer noopener'><FaTwitter/> </a>
                </div>

            </article>
            <article>
                <h4> MAIN</h4>
                
                <Link to='/about'> About</Link>
                <Link to='/plans'> Plans</Link>
                <Link to='/trainers'> Trainers</Link>
                <Link to='/gallery'> Gallery</Link>
                <Link to='/contact'> Contact</Link>
               
            </article>
            <article>
                <h4> RESOURCES </h4>
                <p> <Link to='/s'> Blog</Link> </p>
                <Link to='/s'> Events</Link>
                <Link to='/s'> Communities</Link>
                <Link to='/s'> FAQs</Link>
            </article>
            <article>
                <h4> MORE</h4>
                <Link to='/contact'> Contact us</Link> 
                <Link to='/contact'> Contact us</Link>
                <Link to='/s'> Support</Link>
                
            </article>
            </div>

             <div className="footer_copyright">
                <small>2022  &copy; Emma. All rights reserved</small>
            </div>
        
    </footer>
  )
}

export default Footer