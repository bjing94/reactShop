import React, { Component } from "react";
import AwesomeDropdown from "../awesome-dropdown";
import AwesomeSwitch from "../awesome-switch";
import { AwesomeButton } from "../buttons";
import Item from "../item";

import "./search-result-page.css";

class SearchResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: null,
        minPrice: 0,
        maxPrice: 100000,
        inStock: true,
        genres:[],
        order:"price_asc"
      },
    };
    this.getFilteredItems = props.getFilteredItems;
    this.setFilter = this.setFilter.bind(this);
    this.setGenres=this.setGenres.bind(this);
    this.setMaxPrice=this.setMaxPrice.bind(this);
    this.setOrder=this.setOrder.bind(this);
  }
  
  setFilter(newFilter) {
    this.setState({ filter: newFilter });
  }
  setGenres(newGenres){
    const {filter}=this.state;
  let newFilter = {...filter};
  newFilter.genres = newGenres;
  this.setFilter(newFilter);
}
setMaxPrice(val){
    const {filter}=this.state;
    let newFilter = {...filter};
  newFilter.maxPrice = val[0];
  this.setFilter(newFilter);
}
setMinPrice(val){

}
setOrder(val){
    const {filter}=this.state;
    let newFilter = {...filter};
    newFilter.order = val[0];

    this.setFilter(newFilter);
}
  render() {
    const { filter } = this.state;

    const items = this.getFilteredItems(filter);
    const inStockClass = filter.inStock ? "active" : null;
    const elements = items.map((ele) => {
      return (
        <Item
          key={ele.id}
          id={ele.id}
          src={ele.src}
          name={ele.name}
          price={ele.price}
          discount={ele.discount}
          width={200}
          height={400}
        ></Item>
      );
    });
    return (
      <div className="search-result-container">
        <div className="search-result-row">
          <div className="search-result-title">Каталог игр</div>
          <div className="search-result-count">{items.length} игр</div>
        </div>
        <div className="search-result-row">
          <AwesomeDropdown
          categories={
            [
                {
                    name:"Сначала дешевые",
                    value:"price_asc"
                },
                {
                    name:"Сначала дорогие",
                    value:"price_desc"
                },
            ]
        }
            onChangeValue={this.setOrder}
            defaultVal={[filter.order]}
            itemType={"select"}
          />
          <AwesomeDropdown
            categories={
                [
                    {
                        name:"Хорроры",
                        value:"horror"
                    },
                    {
                        name:"Экшены",
                        value:"action"
                    },
                    {
                        name:"Приключения",
                        value:"adventure"
                    },
                    {
                        name:"Шутеры",
                        value:"shooter"
                    }
                ]
            }
            defaultVal={filter.genres}
            style={"blank"}
            onChangeValue={this.setGenres}
            itemType={"switch"}
          >
            Жанры
          </AwesomeDropdown>
          <AwesomeDropdown
            categories={
                [
                    {
                        name:"Любые",
                        value:100000
                    },
                    {
                        name:"До 1000",
                        value:1000
                    },
                    {
                        name:"До 2000",
                        value:2000
                    },
                ]
            }
            defaultVal={[filter.maxPrice]}
            onChangeValue={this.setMaxPrice}
            style={"blank"}
          />
          <AwesomeSwitch
            onClick={() => {
              let newFilter = { ...filter };
              newFilter.inStock = !newFilter.inStock;
              this.setFilter(newFilter);
            }}
            active={inStockClass}
          >
            В наличии
          </AwesomeSwitch>
        </div>
        <div className="search-result-items">{elements}</div>
      </div>
    );
  }
}

export default SearchResultPage;
