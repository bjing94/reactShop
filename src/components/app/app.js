import React, { Component } from "react";
import TopBar from "../top-bar";
import DataService from "../../services/data-service";
import MainWrapper from "../main-wrapper";
import MainPage from "../main-page";
import TestPage from "../test-page";
import ProductPage from "../product-page";
import { HashRouter  as Router, Switch, Route } from "react-router-dom";
import BottomInfo from "../bottom-info";
import CataloguePage from "../catalogue-page";
import BasketPage from "../basket-page";

import "./app.css";
import SearchOverlay from "../search-overlay";
class App extends Component {
  constructor() {
    super();

    this.dataService = new DataService();
    this.state={
      basket:[],
      searchName:"",
    }

    this.addToBasket=this.addToBasket.bind(this);
    this.removeFromBasket=this.removeFromBasket.bind(this);
    this.setSearchName=this.setSearchName.bind(this);
  }

  addToBasket(id){
    let newBasket = [...this.state.basket];
    newBasket.push(id);
    this.setState({basket:newBasket});
  }
  removeFromBasket(id){
    if(this.state.basket.includes(id)){
      const idx=this.state.basket.findIndex(ele=>ele===id);
      let newBasket = [...this.state.basket.slice(0,idx),...this.state.basket.slice(idx+1)];
      this.setState({basket:newBasket});
    }
   
   
    
  }
  setSearchName(val){
    this.setState({searchName:val});
  }
  render() {
   
    return (
      <Router>
        <div className="app">
          
          <TopBar getList={this.dataService.getList} 
          getAllDevelopers={this.dataService.getAllDevelopers}
          getAllPublishers={this.dataService.getAllDevelopers}
          getAllGenres={this.dataService.getAllGenres}
          basketItems={this.state.basket}
          setSearchName={this.setSearchName}
          getFilteredItems={this.dataService.getFilteredItems}
          searchName={this.state.searchName}/>
          <MainWrapper>
            <Switch>
              <Route path="/test" component={TestPage} />
              <Route
                path="/"
                exact
                render={(props) => (
                  <MainPage
                    getTrending={this.dataService.getTrending}
                    getBestsellers={this.dataService.getBestsellers}
                    getBundle={this.dataService.getBundle}
                    getItem={this.dataService.getItem}
                  />
                )}
              />
              <Route path="/item/:id" 
              render={(props) => (
                <ProductPage
                match={props.match}
                  getItem={this.dataService.getItem}
                  getSimiliarGames={this.dataService.getSimiliarGames}
                  addToBasket={this.addToBasket}
                  
                />
              )} />
             <Route path="/search/:id" 
             render={(props)=>(
                <CataloguePage
                match={props.match}
                getItem={this.dataService.getItem}
                getFilteredItems={this.dataService.getFilteredItems}
                getAllDevelopers={this.dataService.getAllDevelopers}
                getAllPublishers={this.dataService.getAllPublishers}
                getAllRegions={this.dataService.getAllRegions}
                getAllServices={this.dataService.getAllServices}
                />
             )}/>
             <Route path="/basket/" 
             render={(props)=>(
                <BasketPage
                getItem={this.dataService.getItem}
                ids={this.state.basket}
                removeFromBasket={this.removeFromBasket}
                />
             )}/>
            </Switch>
             <BottomInfo/>
          </MainWrapper>
         
        </div>
      </Router>
    );
  }
}
export default App;
