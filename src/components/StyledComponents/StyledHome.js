import React from 'react'
import './StyledHome.css'

function Styled(props){
    return(
        <div className='homecont hvr-grow-shadow home-banner d-flex justify-content-center align-items-center flex-column'>
            {props.children}
        </div>
    )
}

export default Styled