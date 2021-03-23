import React, { Component } from "react";
import ScrollBar from '../scroll-bar';
import "./full-slider.css";


class FullSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      currId: 0,
    };
    this.items = [1, 2, 3, 4, 5];

    this.setSlide = this.setSlide.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.slideTimer = setInterval(() => {
      this.changeSlide();
    }, 3000);
  }
  changeSlide() {
    this.setState(({ currId }) => {
      let newVal = 0;
      if (currId < this.items.length - 1) {
        newVal = currId + 1;
      } else {
        newVal = 0;
      }

      return { currId: newVal };
    });
  }
  setSlide(id) {
    if (id < this.items.length - 1 && id >= 0) {
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
    clearInterval(this.slideTimer);
    this.slideTimer = setInterval(() => {
      this.changeSlide();
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.slideTimer);
  }
  render() {
    const items = this.items;
    const { currId } = this.state;
    const elements = items.map((element,idx) => {
      return <div className="full-slider-item" key={"slide "+idx}></div>;
    });
    const scrollBarItems = items.map((element, idx) => {
      let classNames = "full-slider-scroll-bar-item";
      if (idx === currId) {
        classNames += " active";
      }
      return (
        <div
          className={classNames}
          onClick={() => {
            this.setSlide(idx);
          }}
        ></div>
      );
    });
    const styles = {
      transform: `translateY(${currId * -800}px)`,
    };
    return (
      <div className="full-slider-wrapper">
        <div className="full-slider" style={styles}>
          {elements}
        </div>
        <div className="full-slider-cover">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <ScrollBar
          currId={currId}
          numberOfPages={items.length}
          onClickTop={()=>{this.setSlide(currId-1)}}
          onClickBottom={()=>{this.setSlide(currId+1)}}/>
          {/* <ProductName
            name={"Warhammer: Vermintide II"}
            price={120}
            discount={10}
            marginLeft={250}
            marginTop={300}
            paddingButton={20}
            buttonFontSize={20}
            fontSize={30}
            priceFontSize={20}
            gap={5}
            priceWidth={150}
          /> */}
        </div>
        </div>
          
         
        
    
    );
  }
}

export default FullSlider;
