import React from 'react';

import './system-requirements.css';

const SystemRequirements=(props)=>{
    const {requirements}=props;
    const elements = requirements.map(ele=>{
        return(
            <div key={ele.name} className="system-requirements-item">
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
export default SystemRequirements;