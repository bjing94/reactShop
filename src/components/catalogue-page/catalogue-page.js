import React, { Component } from "react";
import AwesomeDropdown from "../awesome-dropdown";
import AwesomeSwitch from "../awesome-switch";
import { AwesomeButton } from "../buttons";
import Item from "../item";

import "./catalogue-page.css";

class CataloguePage extends Component {
  constructor(props) {
    super(props);
    this.matchId = props.match.params.id;

    let defaultFilter = {
      name: null,
      minPrice: 0,
      maxPrice: 100000,
      inStock: true,
      genres: [],
      developers: [],
      publishers: [],
      services: [],
      regions: [],
      order: "price_asc",
    };
    if (this.matchId.includes("genre_")) {
      defaultFilter.genres.push(this.matchId.slice(6));
    }
    if (this.matchId.includes("dev_")) {
      defaultFilter.developers.push(this.matchId.slice(4));
    }
    if (this.matchId.includes("publisher_")) {
      defaultFilter.publishers.push(this.matchId.slice(10));
    }
    this.state = {
      filter: defaultFilter,
      showAdditional: true,
    };

    this.getFilteredItems = props.getFilteredItems;
    this.getAllDevelopers = props.getAllDevelopers;
    this.getAllPublishers = props.getAllPublishers;
    this.getAllRegions = props.getAllRegions;
    this.getAllServices = props.getAllServices;

    this.setFilter = this.setFilter.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.setMaxPrice = this.setMaxPrice.bind(this);
    this.setOrder = this.setOrder.bind(this);

    this.setDevelopers = this.setDevelopers.bind(this);
    this.setPublishers = this.setPublishers.bind(this);
    this.setRegions = this.setRegions.bind(this);
    this.setServices = this.setServices.bind(this);

    this.toggleShowAdditional = this.toggleShowAdditional.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  setFilter(newFilter) {
    this.setState({
      filter: newFilter,
    });
  }
  setGenres(newGenres) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.genres = newGenres;
    this.setFilter(newFilter);
  }
  setMaxPrice(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.maxPrice = val[0];
    this.setFilter(newFilter);
  }
  setMinPrice(val) {}
  setOrder(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.order = val[0];

    this.setFilter(newFilter);
  }

  setDevelopers(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.developers = val;

    this.setFilter(newFilter);
  }
  setPublishers(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.publishers = val;

    this.setFilter(newFilter);
  }
  setRegions(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.regions = val;

    this.setFilter(newFilter);
  }
  setServices(val) {
    const { filter } = this.state;
    let newFilter = {
      ...filter,
    };
    newFilter.services = val;

    this.setFilter(newFilter);
  }
  toggleShowAdditional() {
    const { showAdditional } = this.state;
    this.setState({
      showAdditional: !showAdditional,
    });
  }
  resetFilter() {
    let newFilter = {
      name: null,
      minPrice: 0,
      maxPrice: 100000,
      inStock: true,
      genres: [],
      developers: [],
      publishers: [],
      services: [],
      regions: [],
      order: "price_asc",
    };
    this.setFilter(newFilter);
  }
  componentWillReceiveProps(nextProps) {
    if (this.matchId != nextProps.match.params.id) {
      let newFilter = {
        name: null,
        minPrice: 0,
        maxPrice: 100000,
        inStock: true,
        genres: [],
        developers: [],
        publishers: [],
        services: [],
        regions: [],
        order: "price_asc",
      };
      if (this.matchId.includes("genre_")) {
        newFilter.genres.push(this.matchId.slice(6));
      }
      if (this.matchId.includes("dev_")) {
        newFilter.developers.push(this.matchId.slice(4));
      }
      if (this.matchId.includes("publisher_")) {
        newFilter.publishers.push(this.matchId.slice(10));
      }
      this.setFilter(newFilter);
    }else{
      let newFilter = [...this.state.filter];
      newFilter.name = nextProps.searchName;
      this.setFilter(newFilter);
    }
//
   
    
  }
  render() {
    const { filter, showAdditional } = this.state;

    const items = this.getFilteredItems(filter);
    const inStockClass = filter.inStock ? "active" : null;
    const developers = this.getAllDevelopers().map((developer) => {
      return {
        name: developer,
        value: developer,
      };
    });
    const publishers = this.getAllPublishers().map((publisher) => {
      return {
        name: publisher,
        value: publisher,
      };
    });
    const services = this.getAllServices().map((service) => {
      return {
        name: service,
        value: service,
      };
    });
    const regions = this.getAllRegions().map((region) => {
      return {
        name: region,
        value: region,
      };
    });

    const additionalFiltersRow = showAdditional ? (
      <div className="search-result-row">
        <AwesomeDropdown
          categories={developers}
          defaultVal={filter.developers}
          style={"blank"}
          onChangeValue={this.setDevelopers}
          itemType={"switch"}
          activeCategories={filter.developers}
        >
          Разработчики{" "}
        </AwesomeDropdown>{" "}
        <AwesomeDropdown
          categories={publishers}
          defaultVal={filter.publishers}
          style={"blank"}
          onChangeValue={this.setPublishers}
          itemType={"switch"}
          activeCategories={filter.publishers}
        >
          Издатели{" "}
        </AwesomeDropdown>{" "}
        <AwesomeDropdown
          categories={regions}
          defaultVal={filter.regions}
          style={"blank"}
          onChangeValue={this.setRegions}
          itemType={"switch"}
          activeCategories={filter.regions}
        >
          Регионы{" "}
        </AwesomeDropdown>{" "}
        <AwesomeDropdown
          categories={services}
          defaultVal={filter.services}
          style={"blank"}
          onChangeValue={this.setServices}
          itemType={"switch"}
          activeCategories={filter.services}
        >
          Сервисы активации{" "}
        </AwesomeDropdown>{" "}
      </div>
    ) : null;
    const filterButtonText = showAdditional ? "Скрыть фильтры" : "Все фильтры";
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
          <div className="search-result-title"> Каталог игр </div>{" "}
          <div className="search-result-count">
            {" "}
            {items.length}
            
          </div>{" "}
        </div>
        <div className="search-result-row">
          <AwesomeDropdown
            categories={[
              {
                name: "Сначала дешевые",
                value: "price_asc",
              },
              {
                name: "Сначала дорогие",
                value: "price_desc",
              },
            ]}
            onChangeValue={this.setOrder}
            defaultVal={[filter.order]}
            itemType={"select"}
            activeCategories={[filter.order]}
          />{" "}
          <AwesomeDropdown
            categories={[
              {
                name: "Хорроры",
                value: "horror",
              },
              {
                name: "Экшены",
                value: "action",
              },
              {
                name: "Приключения",
                value: "adventure",
              },
              {
                name: "Шутеры",
                value: "shooter",
              },
            ]}
            defaultVal={filter.genres}
            style={"blank"}
            onChangeValue={this.setGenres}
            itemType={"switch"}
            activeCategories={filter.genres}
          >
            Жанры{" "}
          </AwesomeDropdown>{" "}
          <AwesomeDropdown
            categories={[
              {
                name: "Любые",
                value: 100000,
              },
              {
                name: "До 1000",
                value: 1000,
              },
              {
                name: "До 2000",
                value: 2000,
              },
            ]}
            defaultVal={[filter.maxPrice]}
            onChangeValue={this.setMaxPrice}
            style={"blank"}
            activeCategories={[filter.maxPrice]}
          />{" "}
          <AwesomeSwitch
            onClick={() => {
              let newFilter = {
                ...filter,
              };
              newFilter.inStock = !newFilter.inStock;
              this.setFilter(newFilter);
            }}
            active={inStockClass}
          >
            В наличии{" "}
          </AwesomeSwitch>{" "}
          <AwesomeButton
            width={170}
            height={35}
            bStyle={"action"}
            onClick={this.toggleShowAdditional}
          >
            {" "}
            {filterButtonText}{" "}
          </AwesomeButton>{" "}
          <AwesomeButton
            width={120}
            height={35}
            bStyle={"whiteBorder"}
            onClick={this.resetFilter}
          >
            {" "}
            Очистить{" "}
          </AwesomeButton>{" "}
        </div>{" "}
        {additionalFiltersRow}{" "}
        <div className="search-result-items"> {elements} </div>{" "}
      </div>
    );
  }
}

export default CataloguePage;
