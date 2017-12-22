import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import TopItem from '../components/TopItem';
import ConItem from '../components/ConItem';

const banImg = require('../images/640x330.jpg');
const itemImg = require('../images/ico125x125_1.png');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topIdx: 0,
            topTip: '《太极熊猫》58服将于10:00停机维护',
            TopItems: ['1', '2', '3'],
            ConItems: ['1', '2', '3', '4', '5', '6'],
        }
    }
    // 轮播图
  swipeTo(i) {
    this.reactSwipe.slide(i, 500);
    this.setState({
      topIdx: i
    });
  }
  swipeMove(index) {
    this.setState({
      topIdx: index
    });
  }
  // 开始游戏
  play(i) {
    console.log(i);
  }
    render() {
        const { topIdx, topTip, TopItems, ConItems } = this.state;
        return (
            <div>
                <div className="banner">
                <ul className="ban_list">
                    <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} swipeOptions={{auto: 2000, continuous: true, stopPropagation: true, callback: (index) => (this.swipeMove.bind(this, index))}}>
                    {TopItems.map((item, i) => <TopItem key={i} itemImg={banImg} />)}
                    </ReactSwipe>
                </ul>
                <span className="opc_bg" />
                <div className="ban_ctrl">
                    {TopItems.map((item, i) => 
                    <i key={i} onClick={this.swipeTo.bind(this, i)} className={topIdx === i ? 'dot on' : 'dot'} />)}
                </div>
                </div>
                <div className="notice">
                    <i className="ico_nt" /> {topTip}
                </div>
                <div className="game_area">
                {ConItems.map((item, i) => 
                    <ConItem key={i} img={itemImg} title="大天使之剑" txt="国民现象级格斗游戏" play={this.play.bind(this, i)}  />)}
                </div>
            </div>
        );
    }
}

export default Home;