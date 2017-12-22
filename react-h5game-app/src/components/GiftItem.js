import React  from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

  // 礼包中心的礼包
function GiftItem(props) {
    return (
        <dl className="game_item">
        <dt className="game_img"><img src={props.img} alt="" /></dt>
        <dd className="game_info">
            <h4 className="game_title">{props.title}</h4>
            <p className="game_txt">{props.isGet ? '激活码: ' + props.info : props.info}</p>
            <CopyToClipboard text={props.info}>
            <span className="btn_nor" style={{'display': props.isGet ? 'inline-block' : 'none'}} title="复制">复 制</span>
            </CopyToClipboard>
            <a href="" className="btn_nor" title="领取" style={{'display': !props.isGet && props.last ? 'inline-block' : 'none'}} onClick={props.get}>领 取
            {props.isNew ? <i className="dot_red" /> : null} </a>
            <a href="" onClick={(e) => e.preventDefault()} className="btn_nor btn_gray" title="已领完" style={{'display': !props.isGet && !props.last ? 'inline-block' : 'none'}}>已领完</a>
            <span className="rem_num" style={{'display': props.isGet ? 'none' : 'inline-block'}}>剩余：{props.last ? props.last : '0'}%</span>
        </dd>
    </dl>
    );
};

export default GiftItem;