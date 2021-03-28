import React from 'react';
import { AwesomeButton } from '../buttons';
import Item from '../item';

import './search-overlay.css';

const SearchOverlay=(props)=>{

    const {active,searchName,getFilteredItems,setsearchOverlayActive}=props;
    let filter={
        name:searchName
    }
    console.log(searchName);
    const items=getFilteredItems(filter);
    const elements=items.map((ele,idx)=>{
        return(
            <Item
      key={"searchItem"+idx}
      id={ele.id}
      src={ele.src}
      name={ele.name}
      price={ele.price}
      discount={ele.discount}
      width={200}
      height={300}
      fontSize={12}/>
        )
    })
    const activeClass = active ? "active" : null;
    return(
        <div className={`search-overlay-container ${activeClass}`}>
            <AwesomeButton bStyle={'action'} onClick={()=>{setsearchOverlayActive(false)}}>Закрыть</AwesomeButton>
            <div className="search-overlay-grid">
              {elements}  
            </div>
            
        </div>
    )
}

export default SearchOverlay;