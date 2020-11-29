import React from 'react'
import './Styled.css'

function Styled(props){
    return(
        <div onMouseOver={props.onHover} onMouseLeave={props.onLeave} className='cont hvr-grow-shadow'>
            {props.children}
        </div>
    )
}

export default Styled

// d-flex justify-content-center flex-column