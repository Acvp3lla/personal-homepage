import React from "react";
import Styled from "../StyledComponents/Styled";
import html from "./icons/black/html.png";
import css from "./icons/black/css.png";
import javascript from "./icons/black/javascript.png";
import react from "./icons/black/react-logo.png";
import sql from "./icons/black/sql.png";
import photoshop from "./icons/black/photoshop.png";
// import illustrator from "./icons/adobe-illustrator.png";
import adobeXD from "./icons/black/adobe-xd.png";
import angular from "./icons/black/angular.png";
import python from "./icons/black/python.png";
import dart from "./icons/black/dart.png";
import flutter from "./icons/black/flutter.png";
import node from './icons/black/nodejs.png';
import Tooltip from '@material-ui/core/Tooltip';

function Skills() {
  const style = {
    maxWidth: "10%",
    maxHeight: "10%",
    position: "relative",
    top: "20px",
    float: "left",
    padding: 0,
    margin: "1rem",
  };

  

  return (
    <Styled>
      <div>
        <h1 id='skills-header' className="hvr-float-shadow mt-3 mb-2" style={{fontWeight: "800",}}> Skills </h1>

        <div className="cotainer d-flex justify-content-center flex-row flex-wrap">
          <div className="col">
            <div className="row mt-4 d-flex justify-content-around">
              <Tooltip title="JavaScript">
                <img className="hvr-buzz" style={style} src={javascript} alt="javascript"/>
              </Tooltip>
              <Tooltip title="Python">
                <img className="hvr-buzz" style={style} src={python} alt="python" />
              </Tooltip>
              <Tooltip title="HTML">
                <img className="hvr-buzz" style={style} src={html} alt="html" />
              </Tooltip>
              <Tooltip title="CSS">
                <img className="hvr-buzz" style={style} src={css} alt="css" />
              </Tooltip>
            </div>
            <div className="row mt-4 d-flex justify-content-around">
              <Tooltip title="Dart">
                <img className="hvr-buzz" style={style} src={dart} alt="dart"/>
              </Tooltip>
              <Tooltip title="React">
                <img className="hvr-buzz" style={style} src={react} alt="react"/>
              </Tooltip>
              <Tooltip title="Angular">
                <img className="hvr-buzz" style={style} src={angular} alt="angular"/>
              </Tooltip>
              <Tooltip title="Flutter">
                <img className="hvr-buzz" style={style} src={flutter} alt="flutter"/>
              </Tooltip>
            </div>
            <div className="row mt-4 d-flex justify-content-around">
              <Tooltip title="NodeJs">
                <img className="hvr-buzz" style={style} src={node} alt="node"/>
              </Tooltip>
              <Tooltip title="SQL">
                <img className="hvr-buzz" style={style} src={sql} alt="sql" />
              </Tooltip>
              <Tooltip title="Photoshop">
                <img className="hvr-buzz" style={style} src={photoshop} alt="photoshop"/>
              </Tooltip>
              <Tooltip title="AdobeXD">
                <img className="hvr-buzz" style={style} src={adobeXD} alt="adobeXD" />
              </Tooltip>
            </div>
          </div>
          </div>
      </div>
    </Styled>
  );
}

export default Skills;
