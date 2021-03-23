import React, { Component } from 'react';
import './dropdown-list.css';
const DropDownItem = (props)=>{
    const {childListId, onMouseEnter,onMouseLeave, elementRole} = props;
    let classNames = "dropdown-item";
    if(childListId!=-1){
        classNames+=" has-next";
    }
    switch (elementRole) {
      case 1:
        classNames += " active-top";
        break;
      case 2:
        classNames += " active";
        break;
      case 3:
        classNames += " active-bottom";
        break;
      default:
        break;
    }
    
    return(
        <div className={classNames}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
            {props.children}
        </div>
    )
}
class DropDownPage extends Component{
    constructor()
    {
        super();

        

        this.state={
            list:[
                "Example",
                "Example 2",
                "Example 3",
            ],
            elementRoles:[],
            

        }

        this.updatePage=this.updatePage.bind(this);
        this.setActiveElement=this.setActiveElement.bind(this);
        this.disableActiveElements=this.disableActiveElements.bind(this);
       
    }
    componentDidMount() {
        this.updatePage();
      }
    
    updatePage()
    {
        const {listId, getData} = this.props;

        if(listId!=-1){
            const data = getData(listId);
            const list =data.list;
            this.setState({list},()=>{
                 let elementRoles=[];
       
                for(let j=0;j<this.state.list.length;j++)
            {
                elementRoles.push(0);
            }
            this.setState({elementRoles});
      
            });
           
        }
    }
    componentDidUpdate(prevProps)
    {
        if(this.props.listId!=prevProps.listId)
        {
            this.updatePage();
        }
    }
    disableActiveElements()
    {
        this.setState(({elementRoles})=>{

            let newRoles = [...elementRoles];
            for(let i=0;i<newRoles.length;i++)
            {
                newRoles[i]=0;
            }
            return({elementRoles:newRoles});
        })
    }
    setActiveElement(id)
    {
        
        this.setState(({elementRoles})=>{

            let newRoles = [...elementRoles];
            for(let i=0;i<newRoles.length;i++)
            {
                newRoles[i]=0;
            }
            newRoles[id]=2;
            if(id>0)
            {
                newRoles[id-1]=1;       
            }
            /*
            ===1===
            ===2=== -> active one
            ===3===
             */
            if(id!=newRoles.length-1)
            {
                newRoles[id+1]=3;
            }
            return({elementRoles:newRoles});
        })
        
    }
    render()
    {
        const {listId,setActiveList,index} = this.props;
        const {list,elementRoles} = this.state;
        
        if(listId===-1)
        {
            return null;
        }
        else
        {
            
            const elements = list.map((ele,id)=>{
                return(
                    <DropDownItem key={ele.id} 
                    childListId={ele.childListId}
                    elementRole={elementRoles[id]}
                    onMouseEnter={()=>{setActiveList(index+1,ele.childListId);this.disableActiveElements();this.setActiveElement(id)}}
                    onMouseLeave={()=>{setActiveList(index+1,-1);}}>
                        {ele.name}
                    </DropDownItem>
                )
            })
            let classNames="fill-rest";
            
            if(elementRoles[elementRoles.length-1]===2)
            {
                classNames+=" active";
                
            }
            
            return(
                <div className="dropdown-page"
                onMouseEnter={()=>{setActiveList(index,listId)}}
                onMouseLeave={()=>{setActiveList(index,-1)}}>
                    {elements}
                   <div className={classNames}
                   onMouseEnter={this.disableActiveElements}></div>
                </div>
            )
        }
    }
}
class DropDownList extends Component{
    constructor()
    {
        super();

        this.state={
            listIds:[0,-1,-1],
        }
        this.showPageTimer=null;
        this.setActiveList=this.setActiveList.bind(this);
        this.setActiveSelf=this.setActiveSelf.bind(this);
    }

    setActiveList(id,val)
    {
       
        

        if(id!=0)
        {
            clearTimeout(this.showPageTimer);
        
        if(val===-1)
        {
           
            let newTimer = setTimeout(()=>
            {
                this.setState(({listIds})=>{
                
                    let newList = [...listIds];
                    for(let j=id;j<newList.length;j++)
                    {
                        newList[j]=-1;
                    }
                    
                    
                    return({listIds:newList});

                    
                })
                
            },500);
            
            this.showPageTimer=newTimer;
            
        }
        else{
            
            
            this.setState(({listIds})=>{
                
                let newList = [...listIds];
                newList[id]=val;
                for(let j=id+1;j<newList.length;j++)
                {
                    newList[j]=-1;
                }
                return({listIds:newList});
                
            })
            
        }
    }
    
            
        
    }
    setActiveSelf(id,val)
    {
        
        if(id!=0)
        {

            console.log("Activating self!");
            
            if(val===true)
            {
                console.log(this.state.listIds[id]);
            this.setActiveList(id,this.state.listIds[id]);
            }
            else
            {
                this.setActiveList(id,-1);
            }
          
            
        }
    }
    render()
    {
        const {getData}=this.props;
        const {listIds}=this.state;
        let index=0;
        const pages = listIds.map(id=>{
            const result = (id!=-1) ? <DropDownPage 
            key={id}
             listId={id}
             index={index}
            getData={getData}
            setActiveList={this.setActiveList}
            setActiveSelf={this.setActiveSelf}/> : null;
            index++;
            return(
                result
            )
        })
       
    
        return(
            <div className="dropdown-row" 
            onMouseLeave={()=>{this.setActiveList(1,-1)}}>
                {pages}
            </div>
        )
    }
}

export default DropDownList;