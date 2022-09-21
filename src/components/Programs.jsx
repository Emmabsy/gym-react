import{GiCrownCoin} from 'react-icons/gi'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

import {AiFillCaretRight} from 'react-icons/ai'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
      
   <h2 className='underline'> OUR PROGRAMS</h2> 
        {/* <SectionHead icon={<GiCrownCoin/>} title='Our Programs'/*/}
        <h3> Exercise doesn’t have to be complicated. Here’s how to make it simple</h3>
      
      <div className="programs_wrapper">
        {
          programs.map(({id, title, info, path})=>{
            return (
              <Card className='program_program' key={id}>
                
                <h4> {title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn_sm'>  Learn More
                <AiFillCaretRight/> </Link>
              </Card>
            )
          })
        }

      </div>

      </div>
      
    </section>
  )
    
}

export default Programs