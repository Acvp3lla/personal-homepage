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
import spring from "./icons/black/spring.png";
import node from './icons/black/nodejs.png';
import Tooltip from '@material-ui/core/Tooltip';

function Skills() {
  return (
    <Styled>
      <div>
        <h1 id='skills-header' className="hvr-float-shadow mt-3 mb-2" style={{fontWeight: "800",}}> Skills </h1>
        <div className="cotainer d-flex justify-content-center flex-row flex-wrap">
          <div id="img-container" className="col">
            <div id="img-row" className="row mt-4 d-flex justify-content-around">
              <Tooltip title="JavaScript">
                <img id="img-style" className="hvr-buzz" src={javascript} alt="javascript"/>
              </Tooltip>
              <Tooltip title="Python">
                <img id="img-style" className="hvr-buzz" src={python} alt="python" />
              </Tooltip>
              <Tooltip title="HTML">
                <img id="img-style" className="hvr-buzz" src={html} alt="html" />
              </Tooltip>
              <Tooltip title="CSS">
                <img id="img-style" className="hvr-buzz" src={css} alt="css" />
              </Tooltip>
            </div>
            <div id="img-row" className="row mt-4 d-flex justify-content-around">
              <Tooltip title="Dart">
                <img id="img-style" className="hvr-buzz" src={dart} alt="dart"/>
              </Tooltip>
              <Tooltip title="React">
                <img id="img-style" className="hvr-buzz" src={react} alt="react"/>
              </Tooltip>
              <Tooltip title="Angular">
                <img id="img-style" className="hvr-buzz" src={angular} alt="angular"/>
              </Tooltip>
              <Tooltip title="spring">
                <img id="img-style" className="hvr-buzz" src={spring} alt="spring"/>
              </Tooltip>
            </div>
            <div id="img-row" className="row mt-4 d-flex justify-content-around">
              <Tooltip title="NodeJs">
                <img id="img-style" className="hvr-buzz" src={node} alt="node"/>
              </Tooltip>
              <Tooltip title="SQL">
                <img id="img-style" className="hvr-buzz" src={sql} alt="sql" />
              </Tooltip>
              <Tooltip title="Photoshop">
                <img id="img-style" className="hvr-buzz" src={photoshop} alt="photoshop"/>
              </Tooltip>
              <Tooltip title="AdobeXD">
                <img id="img-style" className="hvr-buzz" src={adobeXD} alt="adobeXD" />
              </Tooltip>
            </div>
          </div>
          </div>
      </div>
    </Styled>
  );
}

export default Skills;
