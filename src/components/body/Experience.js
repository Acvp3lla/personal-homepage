import React from 'react';
import Styled from '../StyledComponents/Styled';
import data from '../../profile.json';

import "./Profile.css";

function Experience() {
    return(
        <Styled>
            <div className="mt-3 mb-5">
                <h1 id="xp-header" className="hvr-float-shadow" style={{fontWeight: "800",}}>Experience</h1>
            </div>
            <div id='xp-cont' className="container mt-5 d-flex justify-content-center flex-column">
                <div className="col d-flex justify-content-center flex-column">
                    <div className="partition mt-5">
                        <div className="row">
                            <h1 className="blocktxt head1">{data.experience.xp2.company} </h1>
                        </div>
                        <div className="row">
                            <h1 className="blocktxt head2">{data.experience.xp2.role}</h1>
                        </div>
                        <div className="row">
                            <h1 className='blocktxt head3'>{data.experience.xp2.start} - {data.experience.xp2.end}</h1>
                        </div>
                        <div className="row">
                            <h1 className="blocktxt head4">{data.experience.xp2.location}</h1>
                        </div>
                    
                        <div className="row mt-4">
                            <h1 className="blocktxt head1">{data.experience.xp1.company}</h1>
                        </div>
                        <div className="row">
                            <h1 className="blocktxt head2">{data.experience.xp1.role}</h1>
                        </div>
                        <div className="row">
                            <h1 className="blocktxt head3">{data.experience.xp1.start} - {data.experience.xp1.end}</h1>
                        </div>
                        <div className="row">
                            <h1 className="blocktxt head4">{data.experience.xp1.location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Styled>
    );
}

export default Experience;