import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(props){
    return(
        <nav className='navbar d-flex justify-content-center'>
            <div className='nav-box'>
                {/* <div className='row bg-warning mt-4 mt-2'>
                    <Link className='link' to='/'><h4>Home</h4></Link>
                </div> */}
                <div className='row mt-4  hvr-float-shadow'>
                    <Link id='link' className='link' to='/profile' ><p className='blocktext'>Profile</p></Link>
                </div>
                {/* <div className='row mt-4 mt-2'>
                    <Link className='link' to='/education'><p className='blocktext'>Education</p></Link>
                </div> */}
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <Link id='link' className='link' to='/skills'><p className='blocktext'>Skills</p></Link>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <Link id='link' className='link' to='/projects'><p className='blocktext'>Projects</p></Link>
                </div>
                <div className='row mt-4 mt-2 hvr-float-shadow'>
                    <Link id='link' className='link' to='/contact'><p className='blocktext'>Contact</p></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar