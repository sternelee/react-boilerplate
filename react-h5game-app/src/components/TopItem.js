import React  from 'react';
// 顶部 banner

function TopItem (props) {
    return (
        <li><a href="" onClick={(e) => e.preventDefault() }><img src={props.itemImg} alt="" /></a></li>
    );
}

export default TopItem;