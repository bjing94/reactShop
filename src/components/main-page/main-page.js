
import React, { Component } from 'react';
import {BuyButton,CategoryButton,RectangleButton} from '../buttons';
import ItemsPanel from '../items-panel';
import FullSlider from '../full-slider';
import FeaturedItems from '../featured-items';
import BlogList from '../blog-list';
import './main-page.css';






const MainPage=(props)=>{
    const {getTrending,getBestsellers,getItem} = props;
    const trendingItems = getTrending();
    const bestsellers= getBestsellers();
    return(
        <div className="main-page">
            <FullSlider items={["cs_go","halo_1","outlast"]}
            getItem={getItem}/>
            
            <ItemsPanel 
            items={[{
                name:"Хиты",
                items:bestsellers
            },
            {
                name:"Тренды",
                items:trendingItems
            }]}/>
            <FeaturedItems
            items={bestsellers}/>
            <BlogList/>
            
        </div>
    )
}

export default MainPage;