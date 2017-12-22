const initState = {
    topIdx: 0,
    topTip: '《太极熊猫》58服将于10:00停机维护',
    TopItems: ['1', '2', '3'],
    ConItems: ['1', '2', '3', '4', '5', '6'],
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

export default function (state = initState, action) {
    switch(action.type){
        case 'SWITCHBAR':
            return Object.assign({}, state, {
                BarIdx: action.baridx
            });
        default:
            return state;
    }
}
