import React from 'react'
import './StyledHome.css'

function Styled(props){
    return(
        <div className='homecont hvr-grow-shadow'>
            {props.children}
        </div>
    )
}

export default Styled