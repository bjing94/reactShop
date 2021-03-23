import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Item from '../item';
import './item-page.css';

const MultiplePanelButton=(props)=>{
    let classNames = props.active ?  "multiple-panel-button active":"multiple-panel-button";
    return(
        <div className={classNames}
        onClick={props.onClick}>
            {props.children}
        </div>
    )
}

class MultiplePanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            activeCategory:"About"
        }
        this.aboutItem=props.aboutItem;
        this.requirements=props.requirements;
        
        this.setActiveCategory=this.setActiveCategory.bind(this);
    }
    setActiveCategory(val){
        console.log(val);
        this.setState({activeCategory:val});
    }
    
    render() {
        const {activeCategory}=this.state;
        const aboutButtonActive=  activeCategory==="About";
        const sysReqButtonActive=  activeCategory==="SystemReq";
        let content={};
        if(activeCategory==="About")
            content=<div className="multiple-panel-content">
            <div className="multiple-panel-title">Halo 3</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div> 
        if(activeCategory==="SystemReq")
            content=<SystemRequirements
            requirements={this.requirements}/>
        return (
            <div className="multiple-panel-container">
            <div className="multiple-panel-head">
            <MultiplePanelButton active={aboutButtonActive} onClick={()=>{this.setActiveCategory("About")}}>
                Об игре
            </MultiplePanelButton>
            <MultiplePanelButton active={sysReqButtonActive} onClick={()=>{this.setActiveCategory("SystemReq")}}>
                    Системные требования
            </MultiplePanelButton>
            <div className="multiple-panel-head-fill"></div>
            </div>
            <div className="multiple-panel-body">
                {content}
                {/* <div className="multiple-panel-content">
                <div className="multiple-panel-title">Halo 3</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div> */}
            </div>
        </div>
        )
    }
}
const SystemRequirements=(props)=>{
    const {requirements}=props;
    const elements = requirements.map(ele=>{
        return(
            <div className="system-requirements-item">
                <div className="system-requirements-item-name">{ele.name}</div>
                <div className="system-requirements-item-value">{ele.value}</div>
            </div>
        )
    })
    return(
        <div className="system-requirements-container">
            {elements}
        </div>
    )
}


const AdditionalInfo=(props)=>{
    const {name,value}=props;
    return(
        <div className="item-page-description-additional">
        {name}
    <div className="item-page-description-additional-value">{value}</div>
    </div>
    )
}
const PriceInfo=(props)=>{
    return(
        <div className="item-page-description-price-container">
            <div className="item-page-description-price-button">Купить</div>  
                   <div className="item-page-description-price">150 RUB</div>
                   <div className="item-page-description-price-new-price">100 RUB</div> 
                   
                   <div className="item-page-description-price-discount">-20%</div>       
        </div>
    )
}

class ItemGallery extends Component{
    constructor(props) {
        super(props);

        this.state={
            translateX:0,
            activeCategory:"images"
        }
        this.galleryImages=[
            "https://upload.wikimedia.org/wikipedia/en/9/96/Halo_4_gamplay.png",
            "https://upload.wikimedia.org/wikipedia/en/9/96/Halo_4_gamplay.png",
            "https://upload.wikimedia.org/wikipedia/en/9/96/Halo_4_gamplay.png"
        ];
        this.galleryVideos=[
            
        ]
        this.setTranslateX=this.setTranslateX.bind(this);
        this.setActiveCategory=this.setActiveCategory.bind(this);
    }
    setTranslateX(val){

        this.setState({translateX:val});
    }
    setActiveCategory(val){
        this.setState({activeCategory:val});
    }
    render() {
        const {translateX}=this.state;
        const galleryImages=this.galleryImages;
        
        return (
            <div className="item-gallery-wrapper">
            <div className="item-gallery-button-row">
            <div className="item-gallery-button"
            onClick={()=>{this.setActiveCategory("images")}}>Скриншоты</div>
            <div className="item-gallery-button"
            onClick={()=>{this.setActiveCategory("trailers")}}>Трейлеры</div>
            <div className="item-gallery-button"
            onClick={()=>{this.setTranslateX(translateX+850)}}>Предыдущий</div>
            <div className="item-gallery-button"
            onClick={()=>{this.setTranslateX(translateX-850)}}>Следующий</div>
            </div>
            
            <div className="item-gallery" 
            style={{transform:`translateX(${translateX}px)`}}>
                {galleryImages}
            </div>
        </div>
        )
    }
    
}

const ItemTable=(props)=>{
    const {items}=props;
    const elements=items.map(ele=>{
        return(
            <div className="item-table-item">
            <div className="item-table-name">{ele.name}</div>
            <div className="item-table-value">{ele.value}</div>
            </div>
        )
    })
    return(
        <div className="item-table">
            {elements}
        </div>
    )
}
class Edition extends Component{
    constructor(props) {
        super(props);
        this.items=props.items;
        this.state={
            activeItemId:0
        }
    }
    render() {
        const {activeItemId}=this.state;
        const elements=this.items.map((ele,idx)=>{
            let classNames="item-page-edition";
            if(idx===activeItemId){
                classNames+=" active";
            }
            return(
                <div className={classNames}
                onClick={()=>{this.setState({activeItemId:idx})}}>
                {ele}
                <div className="item-page-edition-price">150 RUB</div>
            </div>
            )
        })
        return (
            <div className="item-page-edition-container">
                {elements}
            </div>
        )
    }
    
}

const ItemPage=(props)=>{
    const {match,getItem}=props;
    const item = getItem(match.params.id);
    const categoriesInfo=[
        {
            name:"Жанр",
            value:"Экшн"
        },
        {
            name:"Платформа",
            value:"PC"
        },
        {
            name:"Дата выхода",
            value:"08 марта 2018"
        },
        {
            name:"Издатель",
            value:"Fatshark"
        },
        {
            name:"Разработчик",
            value:"Fatshark"
        }
    ]

    return(
        <div className="item-page-container">
            <Edition
            items={["Gold edition","Стандартное издание"]}/>
            <div className="item-page-item-container">
                <div className="item-page-image"></div>
                <div className="item-page-description-info">
                    <div className="item-page-description-title">Halo 3</div>
                    <PriceInfo/>
                    <div className="item-page-description-additional-container">
                        <AdditionalInfo name={"Язык"} value={"Русский"} />
                        <AdditionalInfo name={"Регион активации"} value={"Россия"} />
                        <AdditionalInfo name={"Сервис активации"} value={"Steam"} />
                    </div>

                </div>
                <ItemTable
                items={categoriesInfo}/>
                <ItemGallery/>
                <div></div>
                <MultiplePanel
                requirements={item.requirements}/>
            </div>
            
        </div>
  
      
    )
}

export default ItemPage;