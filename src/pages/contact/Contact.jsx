import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'

const  Contact= () =>{
  return (
    <>

    <Header title='Get in Touch' image={HeaderImage}>
    
      
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href='mailto:support@emma.com' target='blank' rel='nonreferrer noopener'> <MdEmail/></a>
           <a href='http://m.emamm.geek' target='blank' rel='nonreferrer noopener'> <BsMessenger/></a>
            <a href='http://wa.me/+254726924299' target='blank' rel='nonreferrer noopener'> <BsWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact