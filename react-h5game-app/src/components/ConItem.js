import React from 'react';
// 游戏列表
  
function ConItem(props) {
    return (
        <dl className="game_item">
        <dt className="game_img">
            <img src={props.img} alt="" />
        </dt>
        <dd className="game_info">
            <h4 className="game_title">{props.title}</h4>
            <p className="game_txt">{props.txt}</p>
            <a href="" className="btn_nor" onClick={props.play} title="开始游戏">
            开始游戏
            </a>
        </dd>
        </dl>
    );
}

export default ConItem;