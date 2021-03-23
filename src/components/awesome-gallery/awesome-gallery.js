import React, { Component, useState } from 'react';
import { AwesomeButton,CircleButton } from '../buttons';

import './awesome-gallery.css';

const GalleryItem = (props)=>{
    const {src}=props;
    const styles={
        backgroundImage:`url(${src})`
    }
    return(
        <div className="awesome-gallery-item" style={styles}>

        </div>
    )
}

class AwesomeGallery extends Component{
    constructor(props) {
        super(props);

        this.items = props.items;
        

        this.state={
            translateX:0,
            activeCategory:"screenshots"
        }


        this.changeTranslateX=this.changeTranslateX.bind(this);
        this.setActiveCategory=this.setActiveCategory.bind(this);
    }
    changeTranslateX(val){
        const {translateX}=this.state;

        if(val<0){
            if(translateX+val>(this.items.length)*420*(-1)){
                this.setState({translateX:translateX+val});
            }
        }
        if(val>0){
            if(translateX+val<=0){
                this.setState({translateX:translateX+val});
            }
        }
        console.log(translateX+val);
    }
    setActiveCategory(val){
        this.setState({activeCategory:val});
    }
    render() {
        const {translateX,activeCategory}=this.state;
        let elements=[];
        if(activeCategory==="screenshots")
        {
            elements = this.items.map((ele,idx)=>{
                return <GalleryItem src={ele} key={"galleryItem "+idx}/>
            })
        }
        else{
            elements="Work in progress :(";
        }
         const styles={
                             transform:`translateX(${translateX}px)`
                         }
        
        return(
            <div className="awesome-gallery-wrapper">
                <div className="awesome-gallery-buttons">
                   <div className="awesome-gallery-group"> 
                    <AwesomeButton bStyle={"category"} 
                    active={activeCategory==="screenshots"}
                    onClick={()=>{this.setActiveCategory("screenshots")}}>Скриншоты</AwesomeButton>
                    <AwesomeButton bStyle={"category"}
                    active={activeCategory==="trailers"}
                    onClick={()=>{this.setActiveCategory("trailers")}}>Трейлеры</AwesomeButton>
                    </div>
                    <div className="awesome-gallery-group">
                    <CircleButton 
                    right={false}
                    onClick={()=>{this.changeTranslateX(420)}}
                    ></CircleButton>
                    <CircleButton
                     right={true}
                    onClick={()=>{this.changeTranslateX(-420)}}
                    >След</CircleButton>
                    </div>
                </div>
                <div className="awesome-gallery-container" style={styles}>
                    {elements}
                </div>
            </div>
        )
    }
    
}
// const AwesomeGallery = (props)=>{
//     const {items}=props;
    
//     const [translateX, setTranslateX]=useState(0);
//     const styles={
//         transform:`translateX(${translateX}px)`
//     }
//     const elements = items.map(ele=>{
//         return <GalleryItem src={ele}/>
//     })
    
   
// }
export default AwesomeGallery;