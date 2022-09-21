import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About =() => {
  return (
    <>
 
    <Header title='About Us' image={HeaderImage}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae iusto, 
    fuga neque minus qui eius blanditiis 
    nam quo omnis consectetur hic dolorem odit, sequi tempora, vitae natus amet provident!
     </Header>
   
    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt='StoryImage'/>
        </div>

        <div className="about_section-content">
          <h1> Our Story</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque.</p>
          <p> Lorem ipsum dolor sit amet consectetur?</p>
        </div>
      </div>
    </section>


    <section className="about_vision">
      <div className="container about_vision-container">
        
        <div className="about_section-content">
          <h1> Our Vision</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque.</p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt='VisionImage'/>
        </div>
      </div>
    </section>

   <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt='MissionImage'/>
        </div>
        
        <div className="about_section-content">
          <h1> Our Vision</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque.</p>
        </div>
        
      </div>
    </section>
   

   
     

    </>
  )
}

export default About