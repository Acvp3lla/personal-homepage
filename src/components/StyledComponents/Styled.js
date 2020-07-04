import React from 'react'
import './Styled.css'

function Styled(props){
    return(
        <div className='cont hvr-grow-shadow'>
            {props.children}
        </div>
    )
}

export default Styled