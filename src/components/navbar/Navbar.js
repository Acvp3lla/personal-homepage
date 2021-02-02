import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


function Navbar(props){
    return(
        <nav className='navbar d-flex justify-content-center'>
            <div className='nav-box'>
                <div className='row hvr-float-shadow'>
                    <NavLink id='link' className='link' to='/profile' activeClassName='active'><p className='blocktext'>Profile</p></NavLink>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <NavLink id='link' className='link' to='/skills' activeClassName='active'><p className='blocktext'>Skills</p></NavLink>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <NavLink id='link' className='link' to='/experience'><p className='blocktext'>Experience</p></NavLink>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <NavLink id='link' className='link' to='/projects'><p className='blocktext'>Projects</p></NavLink>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <NavLink id='link' className='link' to='/contact'><p className='blocktext'>Contact</p></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar