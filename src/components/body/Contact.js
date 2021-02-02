import React from 'react';
import Styled from '../StyledComponents/Styled';
import linkedIn from './icons/black/linkedIn.png';
import instagram from "./icons/black/instagram.png";
import outlook from "./icons/black/outlook.png";
import facebook from "./icons/black/facebook.png";
import twitter from "./icons/black/twitter.png";
import Tooltip from '@material-ui/core/Tooltip';



function Contact(){    
    return(
        <Styled>
            <div>
                <h1 id='contact-header' className="hvr-float-shadow mt-3 mb-2" style={{ fontWeight: "800", }}>Contact</h1>

                <div className="d-flex justify-content-center flex-row">
                    <div className="col">
                        <div id="contact-img-container">
                            <Tooltip title="Outlook">
                                <a style={{color: 'black'}} href="mailto:lucianogordon@hotmail.com" rel='noopener noreferrer'>
                                    <img id="contact-img-style" className="hvr-buzz" src={outlook} alt="outlook"/>
                                </a>
                            </Tooltip>
                            <Tooltip title="Linkedin">
                                <a style={{color: 'black'}} href="https://www.linkedin.com/in/lucianogordon" target="_blank" rel='noopener noreferrer'>
                                    <img id="contact-img-style" className="hvr-buzz" src={linkedIn} alt='linkedIn'/>
                                </a>
                            </Tooltip>
                            <Tooltip title="Facebook">
                                <a style={{color: 'black'}} href="https://www.facebook.com/Acvp3lla/" target="_blank" rel='noopener noreferrer'>
                                    <img id="contact-img-style" className="hvr-buzz" src={facebook} alt="facebook"/>
                                </a>
                            </Tooltip>
                            <Tooltip title="Instagram">
                                <a href='https://www.instagram.com/acvp3lla/' target="_blank" rel='noopener noreferrer'>
                                    <img id="contact-img-style" className="hvr-buzz" src={instagram} alt="instagram"/>
                                </a>
                            </Tooltip>
                            <Tooltip title="Twitter">
                                <a href='https://twitter.com/acvp3lla' target="_blank" rel='noopener noreferrer'>
                                    <img id="contact-img-style" className="hvr-buzz" src={twitter} alt="twitter"/>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </Styled>
    )
}

export default Contact