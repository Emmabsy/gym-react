
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
const Values = () => {
  return (
   <section className='values'>
  
    <div className="container values_container">
        
       
        <div className="values_left">
            <div className="values_image">
                <img src= {Image} alt="ValuesImage"/>
            </div>
        </div>
        <div className="values_right">
            <h2 className='underline '> REFER A FRIEND </h2>
           {/* <SectionHead icon={<GiCutDiamond/>} title='Our Values'> </SectionHead>*/}
            <h3>Functional Training</h3>
            <p> With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, 
                squat racks, and deadlift platforms our 
                functional training room has all the equipment you need to take your training to the next level</p>
                
            <h3>General Fitness</h3>
            <p> If your goals are to improve your overall health and wellness, we have everything you need. 
                 We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines,
                  exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. 
                In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, 
                light weights, and much more</p>
            <h3>  Functional Training</h3>
            <p>
                This is how fitness should be — for everyone.  
                A personalized exercise program that you can do from day one - really!
                 A community of people just like you, to make sure you never get stuck
                Get £10 off your next pass for you and a friend. Primal 7 Physical Support System.
                   </p>

            
            
            <button class='btn'> Refer a Friend</button>
            {/*<div className="values_wrapper">
                {
                    values.map(({id, icon, title, desc}) =>{
                        return <Card  key={id} className='values_value'>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>

                        </Card>
                    })
                }
            </div> */}
        </div>
    </div>

   </section>

  )
}

export default Values