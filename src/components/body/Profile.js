import React, { useState } from "react";
import Styled from "../StyledComponents/Styled";
import Photo from "./images/profile-photo.jpg";
import "./Profile.css";
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

function Profile() {
    const [show, setShow] = useState(false)

    const onHover = ()=>{
        setShow(prevVal => true)
    }

    const onLeave = ()=>{
        setShow(prevVal => false)
    }

    const pararaph = (
        <RoughNotationGroup show={show}>
            <p onMouseOver={onHover}>
                I am a past student of the <RoughNotation type="highlight" color="yellow" order='1'> University of the West Indies</RoughNotation> with a{" "} <br />
                Bachelor’ s Degree in <RoughNotation type="highlight" color="yellow" order='2'> Computer Science</RoughNotation>. My interests are in the fields of
      <br />
                <RoughNotation type="highlight" color="yellow" order='2'> Software Development</RoughNotation>,{" "}
                <RoughNotation type="highlight" color="yellow" order='3'> Computer Networking</RoughNotation> and{" "}
                <RoughNotation type="highlight" color="yellow" order='4'>Web Development</RoughNotation>. <br />
                I am a{" "}
                <RoughNotation type="highlight" color="yellow" order='5'>creative</RoughNotation> and{" "}
                <RoughNotation type="highlight" color="yellow" order='6'>driven individual</RoughNotation> and a{" "}
                <RoughNotation type="highlight" color="yellow" order='7'>proactive problem solver</RoughNotation>.{" "}                             
                <br /> My goal is to{" "}
                <RoughNotation type="box" color="red" order='8' animationDuration={2000}> never stop learning</RoughNotation> to improve my skills.{" "}
            </p>
        </RoughNotationGroup>
    );

    const education = (
        <RoughNotationGroup show={show}>
            <p
                style={{
                    margin: 0,
                }}
            >
                <RoughNotation type="underline" color="red" order='7' animationDelay={3000} animationDuration={2000}>Munro College, 2015</RoughNotation>{" "}-{" "}
                <RoughNotation type="underline" color="red" order='7' animationDelay={2000}>High School Diploma</RoughNotation><br />
                <RoughNotation type="underline" color="red" order='8' animationDelay={2000}>The University of the West Indies, 2020</RoughNotation>{" "}-{" "}
                <RoughNotation type="underline" color="red" order='8' animationDelay={2000}>Computer Science B.Sc</RoughNotation>.{" "}
            </p>
        </RoughNotationGroup>
    );

    return (
        <Styled onHover={onHover} onLeave={onLeave}>
            <div>
                <img
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "40px",
                        position: "relative",
                        top: "20px",
                        float: "left",
                        left: "20px",
                        padding: 0,
                        margin: 0,
                    }}
                    className="hvr-grow-shadow"
                    src={Photo}
                    alt="profile-img"
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        top: "40px",
                        float: "left",
                        left: "70px",
                        fontSize: "25px",
                        textAlign: "justify",
                        fontWeight: "600",
                    }}
                    className="hvr-grow"
                >
                    <h1
                        style={{
                            margin: 0,
                        }}
                    >
                        {" "}
            Luciano Gordon{" "}
                    </h1>{" "}
                    <h3
                        style={{
                            margin: 0,
                        }}
                    >
                        {" "}
            Software Developer{" "}
                    </h3>{" "}
                    <h3
                        style={{
                            margin: 0,
                        }}
                    >
                        {" "}
            UI / UX Designer{" "}
                    </h3>{" "}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        top: "40px",
                        float: "left",
                        left: "20px",
                        fontSize: "20px",
                        textAlign: "justify",
                        fontWeight: "600",
                    }}
                >
                    {pararaph}{" "}
                    <h4
                        style={{
                            marginTop: "10px",
                            marginBottom: "4px",
                        }}
                    >
            Education:
                    </h4>
                    {education}
                </div>
            </div>
        </Styled>
    );
}

export default Profile;
