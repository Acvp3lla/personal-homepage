import React from 'react'
import './Styled.css'

function Styled(props){
    return(
        <div className='cont'>
            {props.children}
        </div>
    )
}

export default Styled