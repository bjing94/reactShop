import React, { Component } from 'react';
import Item from '../item';
import ScrollBar from '../scroll-bar';

import './awesome-slider.css';

class AwesomeSlider extends Component{
    constructor(props) {
        super(props);

        this.state={
            currId:0
        }

        this.items=props.items;
        this.title = props.children;
        this.setSlide = this.setSlide.bind(this);
    }

    setSlide(id) {
        if (id < this.items.length  && id >= 0) {
          this.setState({
            currId: id,
          });
        }
        if (id >= this.items.length) {
          this.setState({
            currId: 0,
          });
        }
        if (id < 0) {
          this.setState({
            currId: this.items.length - 1,
          });
        }
        
        
      }

    render() {
        const {currId}=this.state;
        const styles = {
            transform: `translateX(${currId*216*-1}px)`
        }
        const elements = this.items.map((ele,idx)=>{

    
            return(
                <div className="awesome-slider-item" key={"slide "+idx}>
                    <Item width={200} height={400} fontSize={14}
                    key={ele.id}
                    id={ele.id}
                    src={ele.src}
                    name={ele.name}
                    price={ele.price}
                    discount={ele.discount}/>
                   
                </div>
                
            )
        })
        return(
            <div className="awesome-slider-wrapper">
                <div className="awesome-slider-title">
                    {this.title}
                </div>
                <div className="awesome-slider-container" style={styles}>
                    {elements}
                </div>
              <ScrollBar
              currId={currId}
              numberOfPages={this.items.length}
              orientation={"horizontal"}
               onClickTop={()=>{this.setSlide(currId-1)}}
               onClickBottom={()=>{this.setSlide(currId+1)}}
              />
            </div>
        )
    }
    
}


export default AwesomeSlider;