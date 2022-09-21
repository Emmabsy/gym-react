import { useState } from 'react'
import Logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {VscThreeBars} from 'react-icons/vsc'
import {MdOutlineClose} from 'react-icons/md'

import './navbar.css'



const Navbar = () => {
    const[isNavShowing, setIsNavShowing]=useState(false);
  return (
    <nav>
         <div className="container nav_container ">
            <Link to='/' className='logo' onClick={ ()=> setIsNavShowing(false)}> 
                {/*<img src={Logo} alt='Nav Logo'/>*/}
                <h2 className='log'> Emma</h2>
            </Link>

            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hidden'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return (
                            <li key={index}>
                                <NavLink to ={path} className={({isActive})=>isActive ? 'active-nav': ''}
                                onClick={()=>setIsNavShowing(prev => !prev)}> {name} </NavLink>
                            </li>
                        )
                    })
                }

            </ul>
        
          {/* Buttons*/}
            <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(prev => !prev)}>
                
                {
                    isNavShowing ? <MdOutlineClose/> :<VscThreeBars/>
                }
            </button>
         </div>
    </nav>
  )
}

export default Navbar