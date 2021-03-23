import React from 'react';
import Price from '../price';
import {AwesomeButton} from '../buttons';
import { Link } from "react-router-dom";

import './item.css';


const Item = (props)=>{
    const {src,name,price,discount,id,size,
    width=270,
height=498,
fontSize=18}=props;
    // width={200} height={100} fontSize={10}
    const styles={
        backgroundImage: `linear-gradient(transparent,#141111 95%),url(${src})`
    }
    const itemStyles={
        width:`${width}px`,
        height:`${height}px`,
        fontSize:`${fontSize}px`,
    }
    
    return(
        <div className={`item `}
        style={itemStyles}
        >
            <div className="item-image"
            style={styles}></div>
            <div className="item-text">
               {name}
            </div>
            <Price price={price} 
            discount={discount}
            fontSize={fontSize}/>
            <div className="item-buy-panel">
                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                
                   <AwesomeButton width={width/2} height={height/10} fontSize={fontSize}>
                       BUY</AwesomeButton>
                 </Link>
            </div>
        </div>
    )
}

export default Item;