import React from 'react';
import Styled from '../StyledComponents/Styled';
import data from '../../profile.json';

function Education() {
    return(
        <Styled>
            <div className="container">
                <h1 className='mt-3 mb-3'>Education</h1>
                <div className="col">
                    <div className="row">
                        <p>{data.education.highSchool} - </p>
                        <div>&nbsp;</div>
                        <p>{data.education.highSchoolInfo}</p>  
                    </div>

                    <div className="col">
                        <div className="row">
                                <p>{data.education.highSchoolGeneral[1]}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p>{data.education.college} - </p>
                    <div>&nbsp;</div>
                    <p>{data.education.collegeMajor},</p>
                    <div>&nbsp;</div>
                    <p>{data.education.collegeMinor}</p>

                </div>
            </div>
        </Styled>
    );
}

export default Education;