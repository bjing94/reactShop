import React, { Component,useState } from 'react';

import './buttons.css';



const SearchButton=(props)=>{
    const {onClick} = props;
    return(
        <button className="search-button" onClick={onClick}>
            Поиск
        </button>
    )
}










const AwesomeButton=(props)=>{
    const{height=50,
        width=150,
        bStyle="category",
        fontSize=20,
        onClick,
        active}=props;
    const styles={
        height:`${height}px`,
        width:`${width}px`,
        fontSize:`${fontSize}px`,
        borderRadius:`${height/5}px`,
        marginRight:`${fontSize}px`
    }
    const activeClass= active?" active":"";
    return(
        <div className={`awesome-button ${bStyle} ${activeClass}`}
        style={styles} 
        onClick={onClick}>
            {props.children}
        </div>
    )
}
const PanelButton=(props)=>{
    const{height=50,
        width=150,
        bStyle="dark",
        fontSize=20,
        onClick,
        active}=props;
    const styles={
        height:`${height}px`,
        width:`auto`,
        fontSize:`${fontSize}px`,
        borderTopLeftRadius:`${height/5}px`,
        borderTopRightRadius:`${height/5}px`

    }
    const activeClass= active?" active":"";
    return(
        <div className={`panel-button ${bStyle} ${activeClass}`}
        style={styles} 
        onClick={onClick}>
            {props.children}
        </div>
    )
}

const CircleButton=(props)=>{
    const {
        width=40,
        right=false,
        onClick
    } =props;
    const styles={
        width:`${width}px`,
        height:`${width}px`
    }
    let directionClass = " left";
    if(right){
        directionClass=" right";
    }
    return(
        <div onClick={onClick} className={`circle-button ${directionClass}`} style={styles}>

        </div>
    )
}
export {
    SearchButton,
    AwesomeButton,
    PanelButton,
    CircleButton
}