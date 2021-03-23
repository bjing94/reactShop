import React from 'react';

import './bottom-info.css';
const BottomInfoList = () => {
    const items = ["Хиты", "Бестселлеры","Страшно.Очень страшно","Шутеры"]
    const elements = items.map((ele,idx)=>{
        return(
            <div className="bottom-info-list-item" key={"bottomItem "+idx}>
                {ele}
            </div>
        )
    })
    return (
        <div className="bottom-info-list">
            {elements}
        </div>
    )
}
const BottomInfo = () => {
    return (
        <div className="bottom-info-container">
            <div className="bottom-info-logo"></div>
            <BottomInfoList/>
        </div>
    )
}
export default BottomInfo;