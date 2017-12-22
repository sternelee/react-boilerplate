import * as React from 'react';

// 礼包中心的tab
function TabItem(props) {
    return (
        <span className={props.on ? 'tab_nav_item on' : 'tab_nav_item'} onClick={props.changeTab}>{props.title}</span>
    );
} 
    

export default TabItem;