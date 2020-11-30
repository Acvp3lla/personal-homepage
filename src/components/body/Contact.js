import React from 'react';
import Styled from '../StyledComponents/Styled';
import linkedIn from './icons/black/linkedIn.png';
import instagram from "./icons/black/instagram.png";
import outlook from "./icons/black/outlook.png";
import facebook from "./icons/black/facebook.png";
import twitter from "./icons/black/twitter.png";
// import Tooltip from '@material-ui/core/Tooltip';



function Contact(){
    const style = {
        width: "100px",
        height: "100px",
        // maxWidth: "10%",
        // maxHeight: "10%",
        position: "relative",
        top: "20px",
        float: "left",
        left: "20px",
        padding: 0,
        margin: "1rem",
      };
    
    return(
        <Styled>
            <div>
                <h1 className="hvr-float-shadow mt-4 mb-3" style={{ fontSize: "40px", fontWeight: "800", }}>Contact</h1>

                <div className="cotainer d-flex justify-content-center flex-row mt-5">
                    <div className="col">
                        {/* <div className="row mt-4 d-flex justify-content-around">
                            <Tooltip title="JavaScript">
                                <img className="hvr-buzz" style={style} src={outlook} alt="javascript"/>
                            </Tooltip>
                            <Tooltip title="Python">
                                <img className="hvr-buzz" style={style} src={linkedIn} alt="python" />
                            </Tooltip>
                            <Tooltip title="HTML">
                                <img className="hvr-buzz" style={style} src={facebook} alt="html" />
                            </Tooltip>
                            <Tooltip title="CSS">
                                <img className="hvr-buzz" style={style} src={instagram} alt="css" />
                            </Tooltip>
                            <Tooltip title="CSS">
                                <img className="hvr-buzz" style={style} src={twitter} alt="css" />
                            </Tooltip>
                        </div> */}
                        <div className="row d-flex justify-content-around flex-row">
                            <a style={{color: 'black'}} href="mailto:lucianogordon@hotmail.com" rel='noopener noreferrer'>
                                <img className="hvr-buzz" style={style} src={outlook} alt="outlook"/>
                            </a>
                            <a style={{color: 'black'}} href="https://www.linkedin.com/in/lucianogordon" target="_blank" rel='noopener noreferrer'>
                                <img className="hvr-buzz" style={style} src={linkedIn} alt='linkedIn'/>
                            </a>
                            <a style={{color: 'black'}} href="https://www.facebook.com/Acvp3lla/" target="_blank" rel='noopener noreferrer'>
                                <img className="hvr-buzz" style={style} src={facebook} alt="facebook"/>
                            </a>
                            <a href='https://www.instagram.com/acvp3lla/' target="_blank" rel='noopener noreferrer'>
                                <img className="hvr-buzz" style={style} src={instagram} alt="instagram"/>
                            </a>
                            <a href='https://twitter.com/acvp3lla' target="_blank" rel='noopener noreferrer'>
                                <img className="hvr-buzz" style={style} src={twitter} alt="twitter"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Styled>
    )
}

export default Contact