import React from 'react';

import './awesome-switch.css';

const AwesomeSwitch=(props)=>{
    const {active,onClick}=props;
    return(
        <div className="switch-container" onClick={onClick}>
            <div className={`switch-box`}>
                <div className={`switch-box-inner ${active}`}></div>
            </div>
            <div className="switch-text">{props.children}</div>
        </div>
    )
}

export default AwesomeSwitch;