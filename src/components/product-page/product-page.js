import React from "react";
import AwesomeGallery from "../awesome-gallery/awesome-gallery";
import AwesomePanel from "../awesome-panel";
import AwesomeSlider from "../awesome-slider";
import { AwesomeButton } from "../buttons";
import CommentSection from "../comment-section";
import SystemRequirements from "../system-requirements";

import "./product-page.css";

const ProductImage = (props) => {
  const styles = {
    backgroundImage: `url(${props.src})`,
  };
  return <div className="product-image" style={styles}></div>;
};
const ProductSubInfo = (props) => {
  return (
    <div className="sub-info-container">
      <div className="sub-info-a">{props.name}</div>
      <div className="sub-info-b">{props.value}</div>
    </div>
  );
};
const ProductPrice = (props) => {
  const { price, discount } = props;
  const priceText = price===0 ? "FREE" : price;
  
  let priceEl=<div className="product-discounted">{`${priceText}`}</div>
  let discountEl = <div></div>;
  let newPriceEl=<div></div>
  if(price!==0 && discount!==null){
    discountEl=<div className="product-discount">{`-${discount}%`}</div>;
    newPriceEl= <div> {`${price - (price * discount) / 100} RUB`}</div>;
  }
  if(discount===null || price===0){
    if(price===0)
    {
      priceEl=<div className="product-free">{priceText}</div>;
    }else{
      priceEl=`${priceText} RUB`;
    }
  }
  return (
    <div className="product-price">
      {priceEl}
      {newPriceEl}
      {discountEl}
    </div>
  );
};
const ProductTitle = (props) => {
  return <div className="product-title">{props.children}</div>;
};

const ProductTable = (props) => {
  const {items}=props;
  
  const elements = items.map((ele,idx) => {
    return (
      <div className="product-table-item" key={"tableItem "+idx}>
        <div className="product-table-item-name">{ele.name}</div>
        <div className="product-table-item-value">{ele.value}</div>
      </div>
    );
  });
  return <div className="product-table">{elements}</div>;
};
const ProductTag = (props) => {
  return (
    <div className="product-tag">
      <div className="product-circle" />
      {props.children}
    </div>
  );
};
const ProductRow = (props) => {
  return <div className="product-row">{props.children}</div>;
};
const ProductSmallCol = (props) => {
  return <div className="product-small-col">{props.children}</div>;
};
const ProductLargeCol = (props) => {
  return <div className="product-large-col">{props.children}</div>;
};
const productDescr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const systemRequirements = [
  {
    name: "????",
    value: "Windows",
  },
  {
    name: "??????????????????",
    value: "Intel Core i5-2300 @ 2.80 GHz / AMD FX-4350 @ 4.2 GHz",
  },
  {
    name: "?????????????????????? ????????????",
    value: "6 GB ??????",
  },
  {
    name: "????????????????????",
    value: "NVIDIA GeForce GTX 460 or AMD Radeon HD 5870",
  },
  {
    name: "?????????? ???? ??????????",
    value: "45 GB",
  },
];


const ProductPage = (props) => {
  //organize elements you know
  const { getItem, match,addToBasket } = props;
  const id = match.params.id;
  const item = getItem(id);
  const { name, price, discount, 
    requirements, src,descr,
    genres,similiarGames,releaseDate,
    publisher,developer,platform,gallery,inStock,
    region,
    service,
    languageSupport, } = item;

  let textGenres = "";

  genres.forEach(genre=>{
    textGenres+=(genre[0].toUpperCase()+genre.slice(1)+',');
    
  })
  textGenres= textGenres.slice(0,-1)+'';
  const similiarGamesItems = similiarGames.map(ele=>{
    return(getItem(ele));
  })
  const similiarGamesSlider = similiarGames.length>0 ? <AwesomeSlider items={similiarGamesItems}  key={"slider "+id}>?????????????? ????????</AwesomeSlider> : null;
  const stockText = inStock ? "?? ??????????????" : "??????????????????????";
  const languageSupportText = languageSupport ? "????????" : "??????";
  return (
    <div className="product-container">
      
      <ProductRow>
        <ProductSmallCol>
          <ProductImage src={src} />
        </ProductSmallCol>
        <ProductLargeCol>
          <ProductTitle  key={"title "+id}>{name}</ProductTitle>
          <ProductRow>
            <ProductTag  key={"tag1 "+id}>{stockText}</ProductTag>
          </ProductRow>
          <ProductRow>
            <AwesomeButton bStyle={"action"} width={140} height={35} onClick={()=>{addToBasket(id)}}>
              ?? ??????????????
            </AwesomeButton>
            <ProductPrice  key={"price "+id} price={price} discount={discount} />
          </ProductRow>
          <ProductRow>
            <ProductSubInfo key={"sub1 "+id} name={"?????????????? ????????"} value={languageSupportText} />
            <ProductSubInfo key={"sub2 "+id} name={"???????????? ??????????????????"} value={region} />
            <ProductSubInfo key={"sub3 "+id} name={"???????????? ??????????????????"} value={service} />
          </ProductRow>
        </ProductLargeCol>
      </ProductRow>
      <ProductRow>
        <ProductSmallCol>
          <ProductTable
          key={"table "+id}
           items={
            [
              {
                name:"????????",
                value:textGenres
              },
              {
                name:"??????????????????",
                value:platform
              },
              {
                name:"???????? ????????????",
                value:releaseDate
              },
              {
                name:"????????????????",
                value:publisher
              },
              {
                name:"??????????????????????",
                value:developer
              }
            ]
          }/>
        </ProductSmallCol>
        <ProductLargeCol>
          <AwesomePanel
          key={"descr"+id}
            categories={[
              {
                name: "???? ????????",
                value: "about",
              },
              {
                name: "?????????????????? ????????????????????",
                value: "systemReq",
              },
            ]}
            infoArray={[
              {
                name: "about",
                content: descr,
              },
              {
                name: "systemReq",
                content: <SystemRequirements requirements={requirements} />,
              },
            ]}
          />
        </ProductLargeCol>
      </ProductRow>
      <ProductRow>
        <ProductSmallCol>
          {similiarGamesSlider}
        </ProductSmallCol>
        <ProductLargeCol>
          <AwesomeGallery key={"gallery "+id} items={gallery} />
        </ProductLargeCol>
      </ProductRow>
      <ProductRow>
        <ProductSmallCol></ProductSmallCol>
        <ProductLargeCol>
          <AwesomePanel
            key={"panel2 "+id}
            categories={[
              {
                name: "??????????????????????",
                value: "comments",
              },
              {
                name: "????????????",
                value: "about",
              },
            ]}
            infoArray={[
              {
                name: "comments",
                content: <CommentSection/>,
              },
              {
                name: "about",
                content: productDescr,
              },
            ]}
          />
        </ProductLargeCol>
      </ProductRow>
      
    </div>
  );
};

export default ProductPage;
