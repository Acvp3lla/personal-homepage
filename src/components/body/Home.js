import React from 'react';
import StyledHome from '../StyledComponents/StyledHome';
import data from '../../profile.json';
import Particles from 'react-particles-js';
import logo from './icons/lg-logo.png';

function Home(props){
    const style = {
        maxWidth: "15%",
        maxHeight: "15%",
        position: "relative",
        top: "20px",
        float: "left",
        padding: 0,
        margin: "1rem",
    };

    return(
        <>
        <div className='container-fluid d-flex justify-content-center align-items-center pt-5'>
        <Particles
            canvasClassName="particle-canvas"
            // params={{
            // "particles": {
            //     "number": {
            //         "value": 160,
            //         "density": {
            //             "enable": false
            //         }
            //     },
            //     "size": {
            //         "value": 10,
            //         "random": true
            //     },
            //     "move": {
            //         "direction": "bottom",
            //         "out_mode": "out"
            //     },
            //     "line_linked": {
            //         "enable": false
            //     }
            // },
            // "interactivity": {
            //     "events": {
            //         "onclick": {
            //             "enable": true,
            //             "mode": "remove"
            //         }
            //     },
            //     "modes": {
            //         "remove": {
            //             "particles_nb": 10
            //         }
            //     }
            // }
            params={{
	        "particles": {
	            "number": {
	                "value": 160,
	                "density": {
	                    "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
        }}/>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">
                    <StyledHome>
                        <img className="hvr-buzz" style={style} src={logo} alt="javascript"/>
                        <h1 id="home-h1" className="hvr-float-shadow" style={{fontWeight: "800",}}>{data.profile.name}</h1>
                        <h4 id="home-h4" className="hvr-buzz" style={{fontWeight: "500",}}>Software Developer</h4>
                    </StyledHome>
                </div>
                <div className="row d-flex justify-content-center">
                    {props.children}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;