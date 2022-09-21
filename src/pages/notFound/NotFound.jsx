import Header from '../../components/Header'
import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound=()=> {
  return (
    <section>
       <div className=" container notfound_container">
        <h2>Page Not Found</h2>
        <Link to ='/' className='btn'> Go Back Home</Link>
      </div>
    </section>
  
  )
}

export default NotFound