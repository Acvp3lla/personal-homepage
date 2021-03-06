import React from 'react'
import './Footer.css'

function Footer(){
    var year = new Date().getFullYear();
    
    return(
        <footer className='footer p-2'>
            <p id='footer-txt' className='hvr-float-shadow' >Touched by <a id='footer-link-txt' href='https://www.instagram.com/acvp3lla/' target="_blank" rel='noopener noreferrer'>Acvp3lla.</a> © {year}</p>
        </footer>
    )
}

export default Footer