import React, {useState, useEffect} from 'react';
import {useWindowScroll} from 'react-use';

function ScrollToTop(){
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        if(pageYOffset > 400){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }, [pageYOffset]);

    function scrollToTop(){
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    if(visible){
        // return false;
        // Adjust visibility
    }

    return(
        <div className="d-flex align-items-center" onClick={scrollToTop}>
            <div id='scroll-btn' className="scroll-up"></div>
        </div>
    );
}

export default ScrollToTop;