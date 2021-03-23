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
    name: "ОС",
    value: "Windows",
  },
  {
    name: "Процессор",
    value: "Intel Core i5-2300 @ 2.80 GHz / AMD FX-4350 @ 4.2 GHz",
  },
  {
    name: "Оперативная память",
    value: "6 GB ОЗУ",
  },
  {
    name: "Видеокарта",
    value: "NVIDIA GeForce GTX 460 or AMD Radeon HD 5870",
  },
  {
    name: "Место на диске",
    value: "45 GB",
  },
];
const screenshots = [
  "https://external-preview.redd.it/6r7p6fa9B58O5wdRTpiA5mrp5SgUqYIVdzw3SbWlMA8.jpg?auto=webp&s=54f54f151bc06064567e27d4dd4c25d874d2d546",
  "https://i.imgur.com/k2CPj2d.png",
  "https://gamespot1.cbsistatic.com/uploads/scale_landscape/1179/11799911/3664795-halo3.jpg",
];

const ProductPage = (props) => {
  //organize elements you know
  const { getItem, match } = props;
  const id = match.params.id;
  const item = getItem(id);
  const { name, price, discount, 
    requirements, src,descr,
    genres,similiarGames,releaseDate,
    publisher,developer,platform,gallery,inStock } = item;

  let textGenres = "";

  genres.forEach(genre=>{
    textGenres+=(genre[0].toUpperCase()+genre.slice(1)+',');
    
  })
  textGenres= textGenres.slice(0,-1)+'';
  const similiarGamesItems = similiarGames.map(ele=>{
    return(getItem(ele));
  })
  const similiarGamesSlider = similiarGames.length>0 ? <AwesomeSlider items={similiarGamesItems}  key={"slider "+id}>Похожие игры</AwesomeSlider> : null;
  const stockText = inStock ? "В наличии" : "Отсутствует";
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
            <AwesomeButton bStyle={"action"} width={140} height={35}>
              В корзину
            </AwesomeButton>
            <ProductPrice  key={"price "+id} price={price} discount={discount} />
          </ProductRow>
          <ProductRow>
            <ProductSubInfo key={"sub1 "+id} name={"Русский язык"} value={"Есть"} />
            <ProductSubInfo key={"sub2 "+id} name={"Регион активации"} value={"Россия"} />
            <ProductSubInfo key={"sub3 "+id} name={"Сервис активации"} value={"Steam"} />
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
                name:"Жанр",
                value:textGenres
              },
              {
                name:"Платформа",
                value:platform
              },
              {
                name:"Дата выхода",
                value:releaseDate
              },
              {
                name:"Издатель",
                value:publisher
              },
              {
                name:"Разработчик",
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
                name: "Об игре",
                value: "about",
              },
              {
                name: "Системные требования",
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
                name: "Комментарии",
                value: "comments",
              },
              {
                name: "Отзывы",
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
