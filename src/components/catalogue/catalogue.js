import React from 'react';
import { Link } from 'react-router-dom';

import './catalogue.css';

const CatalogueItem=(props)=>{
    const {text,idx}=props;
    return(
        <div className="catalogue-item"  >
            {text}
        </div>
    )
}
const Catalogue = (props)=>{
     const {active,categories, specialCategories}=props;
    const activeClass = active ? "active" : null;
    const columns=categories.map((category,idx)=>{
        const items = category.items;

        const elements=items.map((item,idx)=>{
            return(
              
                <Link to={`/search/${item.value}`} style={{ textDecoration: 'none' }} key={"link "+idx}>      
                    <CatalogueItem text={item.name} idx={idx} key={"item "+idx} />
                </Link>
            )
        })
        return(
            <div className="catalogue-column" key={"column "+idx}>
               <div className="catalogue-category" key={"category "+idx}> {category.name}</div>
                {elements}
            </div>
        )
    })
    const specialElements=specialCategories.map((category,idx)=>{
        
        
               return (
                <Link to={`/category/${category.value}`} style={{ textDecoration: 'none' }} key={"specialCategory "+idx}>      
               <div className="catalogue-category special" > {category.name}</div>
               </Link>
               );
                
          
    })
    return(
        <div className={`catalogue-container ${activeClass}`}>
            {/* <div className="catalogue-column" key={"specialCategory "}>
                {specialElements}
            </div> */}
            {columns}
        </div>
    )
}

export default Catalogue;