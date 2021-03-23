import React, { Component } from "react";
import ScrollBar from '../scroll-bar';
import "./featured-items.css";

const FeaturedItemButton=(props)=>{
  return(
    <div className="featured-item-button">{props.children}</div>
  )
}
const FeauturedItem=(props)=>{
  const {item}=props;
  const priceText = item.price===0 ?"FREE": `${item.price} EUR`;
  const discountElement = item.discount ? <div className="featured-items-item-discount">{`-${item.discount}%`}</div> : <div></div>;
  return(
    <div
            className="featured-items-item"
            style={{ backgroundImage: `linear-gradient(transparent,black 90%),url(${item.src})` }}
          >
            <div></div>
            <div className="featured-items-item-title">{item.name}</div>
            <div className="featured-items-item-price">
            {priceText}
            {discountElement}
            <FeaturedItemButton>BUY</FeaturedItemButton>
            </div>
          </div>
  )
}
class FeaturedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: 0,
    };
    this.items = props.items;
    this.setPage=this.setPage.bind(this);
  }
  setPage(id){
    const {currPage}=this.state;
    if(id>0){
      if(currPage*4<this.items.length-1){
        this.setState({currPage:id});
      }
    }
    if(id<0){
      if(currPage*4>0){
        this.setState({currPage:id});
      }
    }
    if(id===0){
      this.setState({currPage:0});
    }
  }
  render() {
    const items = this.items;
    
    const { currPage } = this.state;
    const currItems = items.slice(currPage * 4, currPage * 4 + 4);
    console.log(currItems);
    return (
      <div className="featured-items-wrapper">

      <div className="featured-items-title">
        OUR CHOICE
      </div>
      <div className="featured-items-container">
        
        <div className="featured-items-container-column">
          <FeauturedItem item={currItems[0]}
          key={currItems[0].name}/>
          <FeauturedItem item={currItems[1]}
          key={currItems[1].name}/>
          
        </div>
        <div className="featured-items-container-column reverse">
          <FeauturedItem item={currItems[2]}
          key={currItems[2].name}/>
          <FeauturedItem item={currItems[3]}
          key={currItems[3].name}/>
          
        </div>
        <ScrollBar
        
        numberOfPages={items.length/4}
        currId={currPage}
        onClickTop={()=>{this.setPage(currPage-1)}}
        onClickBottom={()=>{this.setPage(currPage+1)}}/>
      </div>
      </div>
    );
  }
}

export default FeaturedItems;
