import React, { Component } from 'react';

import GiftItem from '../components/GiftItem';
import TabItem from '../components/TabItem';

const itemImg = require('../images/ico125x125_1.png');

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabItems: ['礼包中心', '领取记录'],
      TabIdx: 0,
      GiftItems: [{
        img: itemImg,
        title: '大天使之剑',
        info: '熊猫碎片*100、熊猫碎片*100、熊猫碎片*100、熊猫碎片*100、 熊猫碎片*100',
        isGet: false,
        isNew: true,
        last: 89
      }, {
        img: itemImg,
        title: '大天使之剑',
        info: '熊猫碎片*100、熊猫碎片*100、熊猫碎片*100、熊猫碎片*100、 熊猫碎片*100',
        isGet: false,
        last: 0
      }, {
        img: itemImg,
        title: '大天使之剑',
        info: 'GFSGJAJDGLQR',
        isGet: true
      }]
    };
  }
  // 开始游戏
  play(i) {
    console.log(i);
  }
  // 更改区服
  changeQf(i) {
    alert(i);
  }
  // 删除
  delQf(i) {
    alert(i);
  }
  // 加载更多
  moreGame() {
    alert(1);
  }
  // 礼包中心 切换
  changeTab(i) {
    this.setState({
      TabIdx: i
    });
  }

  // 点击领取
  get(i) {
    alert(i);
  }

  render() {
    const { TabItems, TabIdx, GiftItems } = this.state;
    return (
      <div className="tab_area">
          <div className="tab_nav">
            {TabItems.map((item, i) => 
            <TabItem key={i} on={i === TabIdx} title={item} changeTab={this.changeTab.bind(this, i)} />)}
          </div>
          <div className="tab_cont">
          <div className="tab_list on"  style={{'display': TabIdx === 0 ? 'block' : 'none'}}>
          <div className="tab_list_item">
              <div className="game_area">
                {GiftItems.map((item, i) => {
                  if (!item.isGet) {
                    return <GiftItem key={i} img={item.img} title={item.title} info={item.info} isGet={item.isGet} isNew={item.isNew} last={item.last} get={this.get.bind(this, i)} />;
                  } else {
                    return null;
                  }
                }
                )}
              </div>
          <span className="click_more">点击加载更多&gt;&gt;</span>
          </div>
          </div>
          <div className="tab_list" style={{'display': TabIdx === 1 ? 'block' : 'none'}}>
          <div className="tab_list_item">
              <div className="game_area">
                {GiftItems.map((item, i) => {
                  if (item.isGet) {
                    return <GiftItem key={i} img={item.img} title={item.title} info={item.info} isGet={item.isGet} />;
                  } else {
                    return null;
                  }
                }
                )}                     
              </div>
              <span className="click_more">点击加载更多&gt;&gt;</span>
          </div>
          </div>
          </div>
          </div>
    );
  }
}

export default Gift;
