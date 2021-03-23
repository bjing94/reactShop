import React, { useState } from "react";
import {AwesomeButton } from "../buttons";
import Catalogue from "../catalogue";
import SearchPanel from "../search-panel";

import "./top-bar.css";
const categories=[
  {
      name:"Жанры",
      items:[
        {
          name:"Шутеры",
          value:"shooters"
        },
        {
          name:"Стратегии",
          value:"strategy"
        },
        {
          name:"Хорроры",
          value:"horrors"
        }
      ]
  },
  {
      name:"Издатели",
      items:[
        {
          name:"Blizzard Entertainment",
          value:"blizzard"
        },
        {
          name:"Electronic Arts",
          value:"ea"
        }
      ]
  },
  {
      name:"Разработчики",
      items:[
        {
          name:"Blizzard Entertainment",
          value:"blizzard"
        },
        {
          name:"Capcom",
          value:"capcom"
        }
      ]
  }
];
const specialCategories=[
  {
      name:"Лидеры продаж",
      value:"hits"
  },
  {
      name:"Новинки",
      value:"new"
  },
  {
    name:"Предзаказы",
    value:"preorders"
},
]
const TopBar = (props) => {

    const {getList} = props;
    const [catalogueActive,setcatalogueActive]=useState(false);
  
  return (

    

    <div className="top-bar">
       <Catalogue active={catalogueActive}
       categories={categories}
       specialCategories={specialCategories}/>
      <div className="top-bar-logo"></div>
      <div className="top-bar-search-container">
      <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"} active={catalogueActive} onClick={()=>{setcatalogueActive(!catalogueActive)}}>Каталог</AwesomeButton>
        <SearchPanel/>
      </div>
      <div className="top-bar-icon-container">
          <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"}>Войти</AwesomeButton>
          <AwesomeButton width={90} height={30} fontSize={14} bStyle={"whiteBorder"}>Корзина</AwesomeButton>
          <AwesomeButton width={90} height={30} fontSize={14} bStyle={"whiteBorder"}>Избранное</AwesomeButton>
      </div>
        
    </div>
  );
};

export default TopBar;
