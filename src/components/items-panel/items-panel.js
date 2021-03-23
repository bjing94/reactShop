import React, { Component } from "react";
import Item from "../item";
import {AwesomeButton, CategoryButton} from '../buttons';

import './items-panel.css';


class ItemsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemsId: 1,
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(idx){
   
      
         this.setState({activeItemsId:idx});
    
    
   
  }
  render() {
    const { items } = this.props;
    const { activeItemsId } = this.state;

    const elements = (items[activeItemsId].items).map((ele,idx) => {
      return( 
      
      <Item
      key={"panelItem"+idx}
      id={ele.id}
      src={ele.src}
      name={ele.name}
      price={ele.price}
      discount={ele.discount}></Item>
   );
    });
    const buttons = items.map((ele,idx) => {

            return(<AwesomeButton
 
            active={idx==activeItemsId}
            
            key={"panelBtn"+idx}
            onClick={()=>{this.handleClick(idx)}}>{ele.name}</AwesomeButton>)
       
        
    });
    return (
      <div className="items-panel-wrapper">
        <div className="items-panel-buttons">{buttons}</div>
        <div className="items-panel">{elements}</div>
      </div>
    );
  }
}

export default ItemsPanel;
