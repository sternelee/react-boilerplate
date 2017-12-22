import React from 'react';
// 最近玩的游戏
function GameItem(props) {
    return (
        <dl className="game_item">
        <dt className="game_img"><img src={props.img} alt=""  /></dt>
        <dd className="game_info">
            <h4 className="game_title">{props.title}</h4>
            <p className="game_txt">上次登录：{props.qf}</p>
            <div className="game_link">
            <a href="" onClick={props.changeQf} title="更换区服">更换区服</a>
            <a href="" onClick={props.delQf} title="删除">删除</a></div>
            <a href="" onClick={props.play} className="btn_nor" title="开始游戏">开始游戏</a>
        </dd>
    </dl>
    );
}

export default GameItem;