import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {AwesomeButton } from "../buttons";
import Catalogue from "../catalogue";
import CircleNumber from "../circle-number";
import LoginPanel from "../login-panel";
import SearchOverlay from "../search-overlay";
import SearchPanel from "../search-panel";

import "./top-bar.css";
const categories=[
  {
      name:"Жанры",
      items:[
        {
          name:"Шутеры",
          value:"genre_shooter"
        },
        {
          name:"Приключения",
          value:"genre_adventure"
        },
        {
          name:"Экшены",
          value:"genre_action"
        },
        {
          name:"Хорроры",
          value:"genre_horror"
        }
      ]
  },
  {
      name:"Издатели",
      items:[
        {
          name:"Microsoft Studios",
          value:"publisher_Microsoft Studios"
        },
        {
          name:"Square Enix",
          value:"publisher_Square Enix"
        }
      ]
  },
  {
      name:"Разработчики",
      items:[
        {
          name:"Valve",
          value:"dev_Valve"
        },
        {
          name:"Bungie",
          value:"dev_Bungie"
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
// const TopBar = (props) => {

    
//     const [catalogueActive,setcatalogueActive]=useState(false);
//     const [loginPanelActive,setloginPanelActive]=useState(false);
//     const [searchOverlayActive,setsearchOverlayActive]=useState(true);
//     const [searchName,setSearchName]=useState("");
    
//   return (

    

//     <div className="top-bar">
//       <SearchOverlay active={searchOverlayActive} getFilteredItems={getFilteredItems} searchName={searchName}/>
//        <Catalogue active={catalogueActive}
//        categories={categories}
//        specialCategories={specialCategories}/>
//        <LoginPanel active={loginPanelActive}/>
//        <Link to={`/`} style={{ textDecoration: 'none' }} key={"basketLink"}>
//       <div className="top-bar-logo"></div>
//       </Link>
//       <div className="top-bar-search-container">
//       <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"} active={catalogueActive} onClick={()=>{setcatalogueActive(!catalogueActive);setloginPanelActive(false)}}>Каталог</AwesomeButton>
//         <SearchPanel setSearchName={setSearchName}/>
//       </div>
//       <div className="top-bar-icon-container">
//           <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"}
//           active={loginPanelActive}
//           onClick={()=>{setloginPanelActive(!loginPanelActive);setcatalogueActive(false)}}>Войти</AwesomeButton>
//          <Link to={`/basket/`} style={{ textDecoration: 'none' }} key={"basketLink"}>
//          <AwesomeButton width={90} height={30} fontSize={14} bStyle={"whiteBorder"}>Корзина
//          <CircleNumber>{basketItems.length}</CircleNumber>
//          </AwesomeButton>
//            </Link>
          
//       </div>
        
//     </div>
//   );
// };

class TopBar extends Component{
  constructor(props) {
    super(props);
    
    this.state={
      catalogueActive:false,
      loginPanelActive:false,
      searchOverlayActive:false,
      searchName:""
    }

    this.setcatalogueActive=this.setcatalogueActive.bind(this);
    this.setloginPanelActive=this.setloginPanelActive.bind(this);
    this.setsearchOverlayActive=this.setsearchOverlayActive.bind(this);
    this.setSearchName=this.setSearchName.bind(this);

    this.props=props;
  }
  
  setcatalogueActive(val){
    this.setState({catalogueActive:val});
  }
  setloginPanelActive(val){
    this.setState({loginPanelActive:val});
  }
  setsearchOverlayActive(val){
    this.setState({searchOverlayActive:val});
  }
  setSearchName(val){
    if(val!=""){
        this.setsearchOverlayActive(true);
        this.setcatalogueActive(false);
        this.setloginPanelActive(false);
    }else{
      this.setsearchOverlayActive(false);
    }
    console.log("searchname ",val);
    this.setState({searchName:val});
  }
  render() {
    const {basketItems,getFilteredItems}=this.props;
    const{catalogueActive,loginPanelActive,searchOverlayActive,searchName}=this.state;
    return (

    

      <div className="top-bar">
        <SearchOverlay active={searchOverlayActive} getFilteredItems={getFilteredItems} searchName={searchName} setsearchOverlayActive={this.setsearchOverlayActive}/>
         <Catalogue active={catalogueActive}
         categories={categories}
         specialCategories={specialCategories}/>
         <LoginPanel active={loginPanelActive}/>
         <Link to={`/`} style={{ textDecoration: 'none' }} key={"basketLink"}>
        <div className="top-bar-logo"></div>
        </Link>
        <div className="top-bar-search-container">
        <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"} active={catalogueActive} onClick={()=>{this.setcatalogueActive(!catalogueActive);this.setloginPanelActive(false);this.setsearchOverlayActive(false)}}>Каталог</AwesomeButton>
          <SearchPanel setSearchName={this.setSearchName} />
        </div>
        <div className="top-bar-icon-container">
            <AwesomeButton width={70} height={30} fontSize={14} bStyle={"whiteBorder"}
            active={loginPanelActive}
            onClick={()=>{this.setloginPanelActive(!loginPanelActive);this.setcatalogueActive(false);this.setsearchOverlayActive(false)}}>Войти</AwesomeButton>
           <Link to={`/basket/`} style={{ textDecoration: 'none' }} key={"basketLink"}>
           <AwesomeButton width={90} height={30} fontSize={14} bStyle={"whiteBorder"}>Корзина
           <CircleNumber>{basketItems.length}</CircleNumber>
           </AwesomeButton>
             </Link>
            
        </div>
          
      </div>
    );
  }
}

export default TopBar;
