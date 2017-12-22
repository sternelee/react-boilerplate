import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { CSSTransition } from 'react-transition-group';
import TopItem from './components/TopItem';
import ConItem from './components/ConItem';
import GameItem from './components/GameItem';
import TabItem from './components/TabItem';
import GiftItem from './components/GiftItem';
import Login from './common/Login';
import UnJQ from 'unjq-ajax';
import './App.css';


const banImg = require('./images/640x330.jpg');
const itemImg = require('./images/ico125x125_1.png');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topIdx: 0,
      topTip: '《太极熊猫》58服将于10:00停机维护',
      TopItems: ['1', '2', '3'],
      ConItems: ['1', '2', '3', '4', '5', '6'],
      BarIdx: 0,
      BarItems: [{
        name: '首页',
        class: 'ico_home'
      }, {
        name: '最近在玩',
        class: 'ico_game'
      }, {
        name: '礼包中心',
        class: 'ico_gift'
      }, {
        name: '登陆/注册',
        class: 'ico_user'
      }],
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
      }],
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
  componentDidMount(){
    const self = this;
    // https://pay-niu-ssl.xunlei.com/js/config/baseConfig.js
    // http://static.webgame.kanimg.com/com/allgameinfos.js
    UnJQ.getScript('https://pay-niu-ssl.xunlei.com/js/config/baseConfig.js', (data, textStatus, jqxhr) => {
      if(jqxhr.status === 200){
        let allgames = window.GAMES, games = [];
        for(let g in allgames){
          let id = allgames[g].gameid.slice(0, 3);
          if(id === '058' || id === '059'){
            games.push(allgames[g]);
          }
        }
        console.log(games);
      }
    });
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
  play(i, e) {
    console.log(i);
    e.preventDefault();
  }
  // 切换底部 tab
  goBar(i) {
    this.setState({
      BarIdx: i
    });
    if (i === 3) {
      Login();
    }
  }
  // 更改区服
  changeQf(i) {
    alert(i);
  }
  // 删除
  delQf(i, e) {
    alert(i);
    e.preventDefault();
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
  get(i, e) {
    alert(i);
    e.preventDefault();
  }

  render() {
    const { topIdx, topTip, TopItems, ConItems, BarIdx, BarItems, GameItems, TabItems, TabIdx, GiftItems } = this.state;
    return (
      <div className="wrap03">
        <div className="banner" style={{'display': BarIdx === 0 ? 'block' : 'none'}}>
          <ul className="ban_list">
            <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} swipeOptions={{auto: 2000, continuous: true, stopPropagation: true, callback: (index) => (this.swipeMove.bind(this, index))}}>
              {TopItems.map((item, i) => <TopItem key={i} itemImg={banImg} />)}
            </ReactSwipe>
          </ul>
          <span className="opc_bg" />
          <div className="ban_ctrl">
            {TopItems.map((item, i) => 
              <i key={i} onClick={this.swipeTo.bind(this, i)} className={topIdx === i ? 'dot on' : 'dot'} />)}
            {/* <i className="dot on" /> */}
          </div>
        </div>
        <div className="notice" style={{'display': BarIdx === 0 ? 'block' : 'none'}}>
          <i className="ico_nt" /> {topTip}
        </div>
        <div className="game_area" style={{'display': BarIdx === 0 ? 'block' : 'none'}}>
          {ConItems.map((item, i) => 
          <ConItem key={i} img={itemImg} title="大天使之剑" txt="国民现象级格斗游戏" play={this.play.bind(this, i)} />)}
        </div>
        {/* 最近玩的游戏 */}
        <div className="tab_area" style={{'display': BarIdx === 1 ? 'block' : 'none'}}>
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
        {/* 礼包中心 */}
        <div className="tab_area" style={{'display': BarIdx === 2 ? 'block' : 'none'}}>
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
        {/* 底部导航栏 */}
        <div className="bot_nav">
          <ul>
            {BarItems.map((item, i) => 
            <li key={i} className={BarIdx === i ? 'on' : ''} onClick={this.goBar.bind(this, i)}>
              <i className={'ico_bot ' + item.class} />{item.name}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
