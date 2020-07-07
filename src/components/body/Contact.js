import React from 'react'
import Styled from '../StyledComponents/Styled'

function Contact(){

    const email = 'lucianogordon@hotmail.com'
    const facebook = 'facebook.com/lucianogordon'
    const linkedin = 'linkedin.com/in/lucianogordon'
    
    return(
        <Styled>
            <div>
                <h1>Contact</h1>
                <div>
                    <h3>Email: <a style={{color: 'black'}} href="mailto:lucianogordon@hotmail.com" >{email}</a></h3>
                    <h3><a style={{color: 'black'}} href="https://www.facebook.com/Acvp3lla/" target="_blank" rel='noreferrer'>Facebook</a></h3>
                    <h3><a style={{color: 'black'}} href="https://www.linkedin.com/in/lucianogordon" target="_blank" rel='noreferrer'>LinkedIn</a></h3>
                </div>
            </div>
        </Styled>
    )
}

export default Contact