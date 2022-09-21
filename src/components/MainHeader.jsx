import {Link} from 'react-router-dom';
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main_header-container">
        <div className="main_header-left">
          {/*<h4> #90DaysofWorkOut</h4> */}
          <h1> JOIN THE ELITE GYM CLUB</h1>
          <p>
            Empower yourself to make the changes you need to make
          </p>
          <Link to ='/plans' className='btn sm'>LET'S GET STARTED</Link>

        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header-Img"/>
          </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader