import React from 'react';
import Price from '../price';
import {BuyButton} from '../buttons';

import "./column-list.css";

const ColumnListItem=(props)=>{
    const {name,price,discount,src}=props;
    console.log(src);
    return(
        <div className="column-list-item">
            <img src={src} 
            className="column-list-item-image"/>
            <div className="column-list-item-info">
                {/* <div className="column-list-item-name">
                   {name}
                </div>
                <div></div>
                <Price price={price} discount={discount}/>
                <div className="column-list-item-bottom-right">
                   <BuyButton>Purchase</BuyButton> 
                </div> */}

                <div className="column-list-item-name">
                   {name}
                </div>
               
                <div className="column-list-row">

                <Price price={price} discount={discount}/>
            
                
             
                <BuyButton>Purchase</BuyButton> 
               
                </div>
                
            </div>
        </div>
    )
}
const ColumnList = (props)=>{
    const {name,description,items}=props;
    console.log(items[0].src);
    const elements = items.map(ele=>{
        return(
            <ColumnListItem
            name={ele.name}
            price={ele.price}
            discount={ele.discount}
            src={ele.src}
            />
        )
    })
    return(
        <div className="column-list-wrapper">

        <div className="column-list-name">
            {name}
        </div>
        <div className="column-list-description">
            {description}
        </div>
        <div className="column-list">
           {elements}
        </div>
        </div>
    )
}
export default ColumnList;