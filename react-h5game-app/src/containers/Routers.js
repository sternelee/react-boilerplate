import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import { spring, AnimatedSwitch } from 'react-router-transition';

import Home from './Home';
import Game from './Game';
import Gift from './Gift';
import Me from './Me';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}
  
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

class Routers extends Component {
    constructor(props){
        super(props);
        this.state = {
            BarIdx: 0,
            BarItems: [{
              name: '首页',
              class: 'ico_home',
              link: '/'
            }, {
              name: '最近在玩',
              class: 'ico_game',
              link: '/game'
            }, {
              name: '礼包中心',
              class: 'ico_gift',
              link: '/gift'
            }, {
              name: '登陆/注册',
              class: 'ico_user',
              link: '/me'
            }]
        }
    }
    // 导航
    goBar(i){
        this.setState({
            BarIdx: i
        })
    }

    render() {
        const { BarItems, BarIdx } = this.state;
        return (
            <Router>
                <div className="wrap03">
                    <AnimatedSwitch 
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="switch-wrapper">
                            <Route exact path="/" component={Home} />
                            <Route path="/game" component={Game} />
                            <Route path="/gift" component={Gift} />
                            <Route path="/me" component={Me} />
                    </AnimatedSwitch>
                    
                    <div className="bot_nav">
                        <ul>
                            {BarItems.map((item, i) => 
                            <li key={i} className={BarIdx === i ? 'on' : ''} onClick={this.goBar.bind(this, i)}>
                                <Link to={item.link}>
                                    <i className={'ico_bot ' + item.class} />{item.name}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Routers;
