import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(){
    return(
        <nav className='navbar'>
                <ul>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/about'>About</Link>
                    </li>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/skills'>Skills</Link>
                    </li>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/projects'>Projects</Link>
                    </li>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/contact'>Contact</Link>
                    </li> 
                </ul>
        </nav>
    )
}

export default Navbar