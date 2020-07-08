import React from "react";
import Styled from "../StyledComponents/Styled";
import loading from "./icons/loading.png";
import "./Project.css";

function Projects() {
  const style = {
    width: "200px",
    height: "200px",
    position: "relative",
    top: "20px",
    float: "left",
    padding: 0,
    margin: "1rem",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <Styled>
      <div>
        <h1
          className="hvr-buzz"
          style={{
            fontSize: "40px",
            fontWeight: "800",
          }}
        >
          Projects
        </h1>
        <div style={divStyle}>
          <img style={style} className="loading" src={loading} alt="loading" />
        </div>
        <h3 className="hvr-buzz">...Coming Soon...</h3>
      </div>
    </Styled>
  );
}

export default Projects;
