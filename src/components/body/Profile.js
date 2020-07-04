import React from 'react'
import Styled from '../StyledComponents/Styled'
import Photo from './images/profile-photo.jpg'
import './Profile.css'

function Profile(){
    const pararaph = <p>I am a final year student of the University of the West Indies pursuing a<br/>
                        Bachelor’s Degree in Computer Science. My interests are in the fields of<br/>
                        Software Development, Computer Networking and Web Development.<br/>
                        I am a creative and driven individual and a proactive problem solver.<br/>
                        My goal is to one day be a major contributor to my field of study.
                        </p>
    
    const education = <p style={{margin: 0}}>Munro College, 2015 - High School Diploma <br/>
                         The University of the West Indies, 2020 - Computer Science B.Sc.</p>
    return(
        <Styled>
            <div>
                <img 
                    style={{
                        width: '200px', 
                        height: '200px', 
                        borderRadius: '40px',
                        position: "relative",
                        top: '20px',
                        float: "left",
                        left: '20px',
                        padding: 0,
                        margin: 0
                    }} 
                    className='hvr-grow-shadow' 
                    src={Photo} 
                    alt='profile-img'
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '40px',
                        float: 'left',
                        left: '100px',
                        fontSize: '18px'
                    }}
                    className='hvr-grow'
                >
                    <h1 style={{margin:0}}>Luciano Gordon</h1>
                    <h2 style={{margin:0}}>Software Developer</h2>
                    <h2 style={{margin:0}}>UI/UX Designer</h2>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '40px',
                        float: 'left',
                        left: '20px',
                        fontSize: '20px',
                        textAlign: 'justify',
                        fontWeight: '600'
                    }}
                >
                    {pararaph}
                    <h4 style={{marginTop:'10px', marginBottom:'4px'}}>Education:</h4>
                    {education}
                </div>
                

            </div>
        </Styled>
    )
}


    

export default Profile