import React from 'react';

import './scroll-bar.css';

const ScrollBarButton=(props)=>{
  const{height=25,
    width=25,
    fontSize=20,
    onClick,
  orientation="top"}=props;
const styles={
    height:`${height}px`,
    width:`${width}px`,
}

return(
    <div className={`scroll-bar-button ${orientation}`}
    style={styles} 
    onClick={onClick}>
        {props.children}
    </div>
)
}
const ScrollBar=(props)=>{
    const {numberOfPages,onClickTop,onClickBottom,currId,orientation=""}=props;
   
    let scrollBarItems=[];
    for(let j=0;j<numberOfPages;j++){
      let classNames = "full-slider-scroll-bar-item";
      if (j === currId) {
        classNames += " active";
      }
      const newItem= <div
      key={"scrollItem"+j}
      className={classNames}
      onClick={() => {
        
      }}
    ></div>
      scrollBarItems.push(newItem);
    }
    
    
    return(
        <div className={`full-slider-scroll-bar ${orientation}`}>
          <ScrollBarButton onClick={() => {
              onClickTop();
            }}/>
           
          <div className={`scroll-bar-items ${orientation}`}>
             {scrollBarItems}
          </div>
         
          <ScrollBarButton onClick={() => {
              onClickBottom();
            }}
            orientation="bottom"/>
         {/* <div className="red">

         </div>
           <div className="blue">
           
         </div>
         <div className="red">
           
           </div> */}
        </div>
    )
}
export default ScrollBar;