
import React, { Component } from 'react';
import {BuyButton,CategoryButton,RectangleButton} from '../buttons';
import ItemsPanel from '../items-panel';
import FullSlider from '../full-slider';
import FeaturedItems from '../featured-items';
import BlogList from '../blog-list';
import './main-page.css';
import BottomInfo from '../bottom-info';





const MainPage=(props)=>{
    const {getTrending,getBestsellers,getBundle} = props;
    const featuredItems=[
        [
            "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
            "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
            "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"
        ],
        [
            "https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG",
                 "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
                 "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Halo_3_ODST_Box_Art.png/220px-Halo_3_ODST_Box_Art.png"
        ],
        [
            "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
            "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
            "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"
        ],
    ];
    const trendingItems = getTrending();
    const bestsellers= getBestsellers();
    
    const ColumnItems=[
        {
            name:"Black ops 2",
            price:60,
            discount:null
        },
        {
            name:"Steam gift card",
            price:120,
            discount:null
        },
        {
            name:"Minecraft",
            price:30,
            discount:null
        },
    ]
    return(
        <div className="main-page">
            <FullSlider/>
            
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
            <BottomInfo/>
        </div>
    )
}

export default MainPage;