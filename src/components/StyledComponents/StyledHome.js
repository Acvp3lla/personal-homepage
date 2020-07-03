import React from 'react'
import './StyledHome.css'

function Styled(props){
    return(
        <div className='homecont'>
            {props.children}
        </div>
    )
}

export default Styled