import React from 'react';

import './circle-number.css';

const CircleNumber=(props)=>{
    const {width=20,
    height=20,
fontSize=10}=props;
        const styles={
            width:`${width}px`,
            height:`${height}px`,
            fontSize:`${fontSize}px`
        }       
    return(
        <div className="circle-number" style={styles}>
            {props.children}
        </div>
    )
}

export default CircleNumber;