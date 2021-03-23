import React from 'react';
import Price from "../price";

import './row-list.css';

const RowListItem=(props)=>{
    const {name,price,discount,src}=props;
    console.log(src);
    return(
        <div className="row-list-item">
            <img 
            src={src}
            className="row-list-item-image"/>
            
            <div className="row-list-item-name">{name}</div>
            <Price price={price} discount={discount}/>
        </div>
    )
}
const RowList = (props)=>{
    const {name,description,items}=props;
    // const elements = items.map(ele=>{
    //     return(
    //         <RowListItem
    //         name={ele.name}
    //         price={ele.price}
    //         discount={ele.discount}
    //         src={ele.src}
    //         />
    //     )
    // })
    return(


   
        <div className="row-list">
           {props.children}
        </div>

    )
}

export default RowList;