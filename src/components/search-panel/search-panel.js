import React from "react";
import {SearchButton} from "../buttons";
import {useState} from "react";

import "./search-panel.css";

const SearchPanel = () => {
  const [text,setText]=useState("");
  
  return (
    <div className="search-panel-container">
        
      <input className="search-panel" onChange={(target)=>{setText(target.value)}} value={text}/>
      <SearchButton/>
    </div>
  );
};

export default SearchPanel;
