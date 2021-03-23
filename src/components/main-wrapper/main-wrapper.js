import React from 'react';

import './main-wrapper.css';

const MainWrapper=(props)=>{
    return(
        <div className="main-wrapper">
            {props.children}
        </div>
    )
}
export default MainWrapper;