import React, { Component } from "react";
import TopBar from "../top-bar";
import DataService from "../../services/data-service";
import MainWrapper from "../main-wrapper";
import MainPage from "../main-page";
import TestPage from "../test-page";
import ProductPage from "../product-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomInfo from "../bottom-info";
import Catalogue from "../catalogue";


import "./app.css";
import SearchResultPage from "../search-result-page";

class App extends Component {
  constructor() {
    super();

    this.dataService = new DataService();
  }
  render() {
    return (
      <Router>
        <div className="app">
         
          <TopBar getList={this.dataService.getList} />
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
                  />
                )}
              />
              <Route path="/item/:id" 
              render={(props) => (
                <ProductPage
                match={props.match}
                  getItem={this.dataService.getItem}
                  getSimiliarGames={this.dataService.getSimiliarGames}
                />
              )} />
             <Route path="/category/:id" 
             render={(props)=>(
                <SearchResultPage
                match={props.match}
                getItem={this.dataService.getItem}
                getFilteredItems={this.dataService.getFilteredItems}/>
             )}/>
            </Switch>
            
          </MainWrapper>
        </div>
      </Router>
    );
  }
}
export default App;
