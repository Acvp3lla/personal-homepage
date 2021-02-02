import React from "react";
import Styled from "../StyledComponents/Styled";
import loading from "./icons/black/loading.png";
import "./Project.css";

function Projects() {
  const style = {
    width: "120px",
    height: "120px",
    position: "relative",
    top: "20px",
    padding: 0,
    margin: "1rem",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <Styled>
        <h1 id='projects-header' className="hvr-float-shadow mt-3 mb-2" style={{fontWeight: "800", }}>Projects</h1>
        
        <div id="img-container" style={divStyle} className="mt-4 mb-5">
          <div className="row">
            <img id="loading-img-style" className="loading mt-5" src={loading} alt="loading" />
          </div>
        </div>
        <h3 id='projects-message' className="hvr-buzz mt-2 pt-5">...Coming Soon...</h3>
        
    </Styled>
  );
}

export default Projects;
