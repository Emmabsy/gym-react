import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './trainers.css'

const Trainers =()=> {
  return (
  <>
  <Header title='Our Trainers' image={HeaderImage}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis? 
    Perspiciatis inventore iure iste eius porro tempora repellendus, 
    consequuntur placeat incidunt quos. Iure ipsum obcaecati hic repellat, autem dolor. Mollitia
  </Header>
  <section className="trainers">
    <div className="container trainers_container">
      {
        trainers.map(({id, image, name, job, socials})=> {
          return <Trainer key={id} image={image} name={name} job={job} socials={
            [
            {icon: <BsInstagram/>, link:socials[0]},
            {icon: <FaFacebook/>, link:socials[1]},
            {icon: <FaTwitter/>, link:socials[2]},
            {icon:<FaLinkedin/>, link:socials[3]}
            ]

          }/>
        })
      }
    </div>



  </section>
  

  </>

  )
}

export default Trainers