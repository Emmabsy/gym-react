import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {testimonials} from "../data"


{/*function Testimonials() {
  const [index, setIndex]=useState(0)
  const {name, quote, job, avatar} = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex(prev => prev-1);

    if(index <=0){
      setIndex(testimonials.length-1);
    }

  }
  const nextTestimonialHandler= ()=> {
    setIndex(prev => prev+1);
    if(index >= testimonials.length-1){
      setIndex(0);
    }

  }

  return (
  <section className="testimonials">
    <div className="container testimonials_container">
      <SectionHead icon={<ImQuotesLeft/> }title='Testimonials' className='testimonials_head'></SectionHead>
      <Card className='testimonial'>
        <div className="testimonial_avatar"> 
         <img src={avatar} alt=''/>
        </div>
        <p className="testimonial_quote"> {`"${quote}"`}</p>
        <h5>{name}</h5>
       <small className="testimonial_title">{job}</small>
     </Card>
     <div className="testimonial_btn-container">
      <button className="testimonials_btn" onClick={prevTestimonialHandler}> <IoIosArrowBack/> </button>
      <button className="testimonials_btn" onClick={nextTestimonialHandler}> <IoIosArrowForward/>  </button>
     </div>

   </div>
</section>

  )
}
*/}


const Testimonials= () => {
  return (
    <section className="testimonials">
    <div className="container programs_container">
        <div className="tTitle"> 
        <h2 className="mainH underline" > "WHAT OUR CLIENTS SAY"</h2>
         <h4> Come talk to Us & We will listen because your opinion Matters</h4>
        
        </div>
        <div className="testimonials_wrapper">
          <div className="tquote"> 
           <p> "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….
           "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….</p>
           <small> Emma press</small>
        </div>
        <div className="tquote"> 
        <p> "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….
           "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….</p>
           <small> Emma press</small>
        </div>
        <div className="tquote"> 
        <p> 
          "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….
           "I began training at Sault Fitness in September 2016, knowing that
           I needed to make some lifestyle changes.
           At age 72, I am amazed at how well I am feeling today….
        </p>
           <small> Emma press</small>
        </div>
     
       
       </div>

      </div>
    </section>
  )
}




export default Testimonials