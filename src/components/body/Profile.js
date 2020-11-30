import React, { useState } from "react";
import StyledHome from "../StyledComponents/Styled";
import Photo from "./images/profile-photo.jpg";
import "./Profile.css";
import data from '../../profile.json';
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

function Profile() {
    const [show, setShow] = useState(false)

    const onHover = ()=>{
        setShow(prevVal => true)
    }

    const onLeave = ()=>{
        setShow(prevVal => false)
    }

    const imageStyle={
        maxWidth: "85%",
        maxHeight: "85%",
        borderRadius: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    }

    // const pararaph = (
    //     <RoughNotationGroup show={show}>
    //         <p onMouseOver={onHover}>
    //             I am a past student of the <RoughNotation type="highlight" color="yellow" order='1'> University of the West Indies</RoughNotation> with a{" "} <br />
    //             Bachelor’ s Degree in <RoughNotation type="highlight" color="yellow" order='2'> Computer Science</RoughNotation>. My interests are in the fields of
    //   <br />
    //             <RoughNotation type="highlight" color="yellow" order='2'> Software Development</RoughNotation>,{" "}
    //             <RoughNotation type="highlight" color="yellow" order='3'> Computer Networking</RoughNotation> and{" "}
    //             <RoughNotation type="highlight" color="yellow" order='4'>Web Development</RoughNotation>. <br />
    //             I am a{" "}
    //             <RoughNotation type="highlight" color="yellow" order='5'>creative</RoughNotation> and{" "}
    //             <RoughNotation type="highlight" color="yellow" order='6'>driven individual</RoughNotation> and a{" "}
    //             <RoughNotation type="highlight" color="yellow" order='7'>proactive problem solver</RoughNotation>.{" "}                             
    //             <br /> My goal is to{" "}
    //             <RoughNotation type="box" color="red" order='8' animationDuration={2000}> never stop learning</RoughNotation> to improve my skills.{" "}
    //         </p>
    //     </RoughNotationGroup>
    // );

    return (
        <StyledHome onHover={onHover} onLeave={onLeave}>
            <div className="mt-4 mb-3">
            <h1 className="hvr-float-shadow" style={{fontSize: "40px",fontWeight: "800",}}>Profile</h1>
            </div>
            <div className='row ml-4 mr-4 d-flex align-items-center'>
            
                <div className="col-8 d-flex align-items-center flex-column">
                    <div>
                        <h3 className='mb-2 hvr-float-shadow' style={{fontWeight: "700",}}>About Me</h3>
                    </div>
                    {/* <div className='col'></div> */}
                    {/* <RoughNotationGroup show={show}> */}
                    <div className='pt-2'>
                        <p className='overview'>
                            {/* <RoughNotation type="highlight" color="yellow" order='1'> */}
                                {data.profile.overview.p1}
                            {/* </RoughNotation> */}
                        </p>
                        <p className='overview'>{data.profile.overview.p2}</p>
                    </div>
                    {/* </RoughNotationGroup> */}
                    <div>
                        <h3 className='mb-2 hvr-float-shadow' style={{fontWeight: "700",}}>Education</h3>
                    </div>
                    <RoughNotationGroup show={show}>
                        <div className='col'>
                            <div className='row pt-2'>
                                <p className='underview blocktxt'>
                                <RoughNotation type="underline" color="red" order='7' animationDelay={3000} animationDuration={2000}>
                                    {data.education.highSchool} - {data.education.highSchoolInfo}
                                </RoughNotation>
                                </p>
                                <p className='underview blocktxt'>
                                    <RoughNotation type="underline" color="red" order='7' animationDelay={2000} animationDuration={2000}>
                                        {data.education.college} - {data.education.collegeMajor}, {data.education.collegeMinor}
                                    </RoughNotation>
                                </p>
                            </div>
                        </div>
                    </RoughNotationGroup>
                </div>

                <div className="col-4 mt-5">
                    <div className="container">
                        <div className="row">
                            <img id='profile-img' style={imageStyle} className="hvr-grow-shadow" src={Photo} alt="profile-img"/>
                        </div>
                        <div className="col">
                            <div className="row mt-2">
                                <h1 className="blocktxt toptier">{data.profile.name}</h1>
                            </div>
                            <div className="row">
                                <h1 className="blocktxt secondtier">{data.profile.role1}, {data.profile.role2}</h1>
                            </div>
                            <div className="row">
                                <h1 className="blocktxt thirdtier">{data.profile.location}</h1>
                            </div>
                            {/* <div className="row">
                                <h1 className="blocktxt thirdtier"></h1>
                            </div> */}
                            <div className="row d-flex justify-content-center">
                                {/* <button className="btn btn-primary d-flex align-items-center"> Twitter</button> */}
                                <div className="btn btn-primary d-flex align-items-center">
                                    <a className="d-flex align-items-center" id="twitter-btn" href="https://twitter.com/acvp3lla?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">
                                        <AiFillTwitterCircle className="icon-style mr-1"/>Twitter
                                    </a>
                                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                                
                                <div className="btn btn-dark ml-3 d-flex align-items-center">
                                    <a className='d-flex align-items-center' id='link' href='https://github.com/Acvp3lla' target="_blank" rel='noopener noreferrer'>
                                        <AiFillGithub className="icon-style mr-1"/>Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHome>
    );
}

export default Profile;
