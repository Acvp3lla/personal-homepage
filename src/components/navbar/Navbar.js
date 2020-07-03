import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import './Navbar.css'
import Home from '../body/Home'
import About from '../body/About'
import Skills from '../body/Skills'
import Projects from '../body/Projects'
import Contact from '../body/Contact'

function Navbar(){
    return(
        <nav className='navbar'>
                <ul>
                    <li>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className='link' to='/skills'>Skills</Link>
                    </li>
                    <li>
                        <Link className='link' to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className='link' to='/contact'>Contact</Link>
                    </li> 
                </ul>
        </nav>
    )
}

export default Navbar