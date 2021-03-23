import React, { Component } from "react";
import { act } from "react-dom/test-utils";
import AwesomeSwitch from "../awesome-switch";

import "./awesome-dropdown.css";

class AwesomeDropdown extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.defaultVal=props.defaultVal;
    this.state = {
      active: false,
      activeCategories: this.defaultVal,
    };
    

    this.handleClick = this.handleClick.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
  }
  handleClick(category, isMultiple) {

    const {onChangeValue}=this.props;
    const {activeCategories}=this.state;
    let newCategories=[];
    if (isMultiple) {
      if (activeCategories.includes(category)) {
        let idx = activeCategories.indexOf(category);
        
         newCategories = [...activeCategories.slice(0,idx),...activeCategories.slice(idx+1)];
        
      } else {
         newCategories = [...activeCategories, category];

        
      }
      this.setState(({ activeCategories }) => {
          return { activeCategories: newCategories };
      });
    } else {
      newCategories = [category];
      this.setState(({ activeCategories }) => {
        return { activeCategories: newCategories };
      });
    }

    
 
   onChangeValue(newCategories);
  }
  openDropDown() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const {
      height = 50,
      width = 250,
      style = "default",
      fontSize = 14,
      onClick,
      categories,
      itemType,
      
    } = this.props;

    const styles = {
      width: `${width}px`,
      fontSize: `${fontSize}px`,
    };

    const { active, activeCategories } = this.state;
    const activeClass = active ? "" : " hidden";

    let elements = [];
    let buttonText = "text";
    switch (itemType) {
      case "switch":
        elements = categories.map((category) => {
          const switchActive = activeCategories.includes(category.value)
            ? "active"
            : null;
          
          return (
            <AwesomeSwitch
              active={switchActive}
              onClick={() => {
                this.handleClick(category.value, true);
              }}
            >
              {category.name}
            </AwesomeSwitch>
          );
        });
        buttonText = this.props.children;
        break;
      default:
        elements = categories.map((category) => {
          if(activeCategories.includes(category.value)){
            buttonText=category.name;
          }
          return (
            <div
              className="awesome-dropdown-item"
              onClick={() => {
                this.handleClick(category.value, false);
              }}
            >
              {category.name}
            </div>
          );
        });
        break;
    }
 
    return (
      <div
        className={`awesome-dropdown ${activeClass} ${style} `}
        style={styles}
        onClick={onClick}
      >
        <div
          className={`awesome-dropdown-button ${style}`}
          onClick={this.openDropDown}
        >
          {buttonText}
        </div>
        <div className={`awesome-dropdown-content ${activeClass}`}>
          {elements}
        </div>
      </div>
    );
  }
}

export default AwesomeDropdown;
