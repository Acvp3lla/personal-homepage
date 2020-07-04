import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(props){
    return(
        <nav className='navbar'>
                <ul>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='hvr-float-shadow'>
                        <Link className='link' to='/profile' >Profile</Link>
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