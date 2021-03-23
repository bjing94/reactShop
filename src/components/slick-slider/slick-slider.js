import React, { Component } from 'react';

import './slick-slider.css';


class SlickSlider extends Component{
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="slick-slider-wrapper">
                <div className="slick-slider-tabs">
                <div className="slick-slider-tab">
                
                 </div>
                </div>
                <div className="slick-slider-container"></div>
                <div className="slick-slider-scroll"></div>
            </div>
        )
    }
    
}