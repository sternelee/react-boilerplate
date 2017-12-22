import React, { Component } from 'react';
import GameItem from '../components/GameItem';

const itemImg = require('../images/ico125x125_1.png');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GameItems: [{
        img: itemImg,
        title: '大天使之剑',
        qf: '58区-mmmmm'
      }, {
        img: itemImg,
        title: '大天使之剑',
        qf: '58区-mmmmm'
      }, {
        img: itemImg,
        title: '大天使之剑',
        qf: '58区-mmmmm'
      }, {
        img: itemImg,
        title: '大天使之剑',
        qf: '58区-mmmmm'
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
    const { GameItems } = this.state;
    return (
      <div className="tab_area">
          <div className="tab_list_item">
            <div className="game_area">
              {GameItems.map((item, i) => 
                <GameItem 
                  key={i} 
                  img={item.img} 
                  title={item.title} 
                  qf={item.qf} 
                  changeQf={this.changeQf.bind(this, i)} 
                  delQf={this.delQf.bind(this, i)} 
                  play={this.play.bind(this, i)} 
                />
              )}
            </div>
            <span className="click_more" onClick={this.moreGame}>点击加载更多&gt;&gt;</span>
          </div>
        </div>
    );
  }
}

export default Game;
