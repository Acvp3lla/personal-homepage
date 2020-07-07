import React from "react";
import Styled from "../StyledComponents/Styled";
import html from "./icons/html.png";
import css from "./icons/css.png";
import javascript from "./icons/javascript.png";
import react from "./icons/react-logo.png";
import sql from "./icons/sql.png";
import photoshop from "./icons/photoshop.png";
import illustrator from "./icons/adobe-illustrator.png";
import adobeXD from "./icons/adobe-xd.png";
import angular from "./icons/angular.png";
import python from "./icons/python.png";

function Skills() {
  const style = {
    width: "100px",
    height: "100px",
    position: "relative",
    top: "20px",
    float: "left",
    left: "20px",
    padding: 0,
    margin: "1rem",
  };

  const divStyle = {
    marginBottom: "200px",
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
          Skills
        </h1>
        <div style={divStyle}>
          <img className="hvr-buzz" style={style} src={html} alt="html" />
          <img className="hvr-buzz" style={style} src={css} alt="css" />
          <img
            className="hvr-buzz"
            style={style}
            src={javascript}
            alt="javascript"
          />
          <img className="hvr-buzz" style={style} src={react} alt="react" />
          <img className="hvr-buzz" style={style} src={angular} alt="angular" />
        </div>
        <div style={divStyle}>
          <img className="hvr-buzz" style={style} src={sql} alt="sql" />
          <img
            className="hvr-buzz"
            style={style}
            src={photoshop}
            alt="photoshop"
          />
          <img
            className="hvr-buzz"
            style={style}
            src={illustrator}
            alt="illustrator"
          />
          <img className="hvr-buzz" style={style} src={adobeXD} alt="adobeXD" />
          <img className="hvr-buzz" style={style} src={python} alt="python" />
        </div>
      </div>
    </Styled>
  );
}

export default Skills;
