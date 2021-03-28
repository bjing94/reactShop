import React from 'react';
import { AwesomeButton } from '../buttons';
import Price from '../price';

import './basket-page.css';


const BasketItem=(props)=>{
    const {item,removeFromBasket}=props;
    const {id,name,src,price,discount,region,service}=item;
    return(
       
        <div key={"basketItem "+id} className="basket-item-container">
            <img className="basket-item-image" src={src}/>
            <div className="basket-item-info">
                <div className="total-row">
                <div className="basket-item-title">{name}</div>
                <div className="delete-cross" onClick={()=>{removeFromBasket(id)}}></div>
                </div>
                <div className="basket-item-row line">
                <Price price={price} 
            discount={discount}
            fontSize={15}/>
                </div>
                <div className="basket-item-row">
                    <div className="basket-item-additional">
                        {"Регион активации: "}
                        <div className="basket-item-additional-value">
                            {region}
                        </div>
                    </div>
                    <div className="basket-item-additional">
                        {"Сервис активации: "}
                        <div className="basket-item-additional-value">
                            {service}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const BasketPage=(props)=>{
    
    const {ids,getItem,removeFromBasket}=props;
    let finalPrice=0;
    const elements = ids.map(id=>{
        const item=getItem(id);
        finalPrice+=(item.price*(1.0-item.discount/100));
        return(
            <BasketItem item={item} removeFromBasket={removeFromBasket}/>
        )
    })
    
    return(
        <div className="basket-page-container">
         <div className="basket-container">
             <div className="basket-title">{`Мой заказ ${elements.length}`}</div>
            {elements}
        </div>
        <div className="total-container">
            <div className="total-row">
            <div className="total-title">Итого</div>
            <div className="total-price">{`${finalPrice} RUB`}</div>
            </div>
            <div className="total-row">
                <AwesomeButton bStyle={"action"}>Оформить</AwesomeButton>
            </div>
            
        </div>
    </div>
       
    )
}

export default BasketPage;