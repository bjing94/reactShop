import React from "react";
import {SearchButton} from "../buttons";
import {useState} from "react";

import "./search-panel.css";

const SearchPanel = (props) => {
  
  const {setSearchName}=props;
  return (
    <div className="search-panel-container">
        
      <input className="search-panel"  onChange={(evt)=>{setSearchName(evt.target.value)}}
      onClick={(evt)=>{setSearchName(evt.target.value)}}/>
      <SearchButton/>
    </div>
  );
};

export default SearchPanel;
