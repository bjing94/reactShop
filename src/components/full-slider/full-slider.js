import React, { Component } from "react";
import { AwesomeButton } from "../buttons";
import Price from "../price";
import ScrollBar from "../scroll-bar";
import "./full-slider.css";

const SliderName = (props) => {
  const { name, price, discount } = props;
  
  return (
    <div className="slider-name-container" >
      <div className="slider-name">{name}</div>
      <Price price={price} discount={discount} />
      <AwesomeButton bStyle={"action"}>Купить</AwesomeButton>
    </div>
  );
};
class FullSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      currId: 0,
    };
    this.items = props.items;
    this.getItem=props.getItem;

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
    if (id <= this.items.length - 1 && id >= 0) {
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
    const elements = items.map((itemId, idx) => {
      const item=this.getItem(itemId);
      const styles={
        backgroundImage:`url(${item.gallery[0]})`
      }
      return (
        <div className="full-slider-item" key={"slide " + idx} style={styles}> 
          <SliderName  price={item.price} 
          discount={item.discount} 
          name={item.name} 
          src={item.gallery[0]}/>
        </div>
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
        <div className="full-slider-scroll">
        <ScrollBar
            currId={currId}
            numberOfPages={items.length}
            onClickTop={() => {
              this.setSlide(currId - 1);
            }}
            onClickBottom={() => {
              this.setSlide(currId + 1);
            }}
          />
        </div>
      </div>
    );
  }
}

export default FullSlider;
