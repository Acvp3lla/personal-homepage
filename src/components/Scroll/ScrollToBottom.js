import React, {useState, useEffect} from 'react';
import {useWindowScroll} from 'react-use';

function ScrollToBottom(){
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        if(pageYOffset < 700){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }, [pageYOffset]);

    function scrollToBottom(){
        window.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"});
    }

    if(visible){
        // Adjust visibility
    }

    return(
        <div onClick={scrollToBottom}>
            <div id='scroll-btn' className="scroll-down"></div>
        </div>
    );
}

export default ScrollToBottom;