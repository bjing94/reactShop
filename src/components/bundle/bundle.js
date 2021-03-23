import React from 'react';
import Price from "../price";
import './bundle.css';
const Bundle = (props)=>{
    const {bundle}=props;
    const{bunldeItems,discount}=bundle;
     let price=0;
    const elements = bunldeItems.map(ele=>{
        return(
            <div className="bundle-item">
                <img className="bundle-item-image" 
                src={ele.src}/>
                <div className="bundle-item-name">
                    {ele.name}
                </div>
            </div>
        )
    })
    for(let j=0;j<bunldeItems.length;j++){
        price+=bunldeItems[j].price;
    }
    return(
        <div className="bundle-container">
            {elements}
            <div className="bundle-cover">BUNDLE</div>
            <div className="bundle-price">
                <Price price={price}
                discount={discount}/>
            </div>
        </div>
    );
}

export default Bundle;