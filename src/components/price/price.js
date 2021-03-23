import React from 'react';

import './price.css';

const Price = (props)=>{
    const {price,discount,fontSize,width}=props;
    const discountEl = discount ? <div className="discount-block" style={{fontSize:`${fontSize}px`}}>{`-${discount}%`}</div> : null;
    let classNames="price";
    const newPrice = price-(price*discount/100);
    if(discount)
    {
        classNames+=" discounted";
    }
    return(
        <div className="price-container"
        style={{fontSize:`${fontSize}px`,
    width:`${width}px`}}>

            {`${newPrice} RUB`}
                
            {discountEl}
           

        </div>
       
    );
}
export default Price;