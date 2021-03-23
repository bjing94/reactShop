import React,{Component} from 'react';
import {PanelButton} from '../buttons';

import './awesome-panel.css';

class AwesomePanel extends Component{
    constructor(props) {
        super(props);

        this.aboutItem=props.aboutItem;
        this.requirements=props.requirements;
        this.categories=props.categories;
        this.infoArray=props.infoArray;

        this.state={
            activeCategory:this.categories[0].value
        }
        

        this.setActiveCategory=this.setActiveCategory.bind(this);
    }
    setActiveCategory(val){
       // console.log(val);
        //console.log(typeof(val));
        this.setState({activeCategory:val});
    }
    
    render() {
        const {activeCategory}=this.state;
        let content=null;
        let currentInfo=this.infoArray.filter(ele=>ele.name===activeCategory)[0];
        if(currentInfo){
            content=currentInfo.content;
        }
        const buttons=this.categories.map((ele,idx)=>{
            const active= ele.value===activeCategory;
            return(
                <PanelButton active={active} onClick={()=>{this.setActiveCategory(ele.value)}} key={"panelBtn"+idx}>
                    {ele.name}
                </PanelButton>
            )
        })
        console.log(activeCategory);
       
        return (
            <div className="awesome-panel-container">
            <div className="awesome-panel-head">
            {buttons}
            <div className="awesome-panel-head-fill"></div>
            </div>
            <div className="awesome-panel-body">
                
                
                <div className="awesome-panel-content">
                {content}
                </div>
            </div>
        </div>
        )
    }
}
export default AwesomePanel;