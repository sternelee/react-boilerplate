import cookie from 'js-cookie';
import Jsonp from 'fetch-jsonp';
// import UnJQ from 'unjq-ajax';
// import * as ReactCookie from 'react-cookies';

const appid = 'wx33d87c078872bf59';
const h5url = 'https://h5.niu.xunlei.com/';
const loginUrl = 'https://game.niu.xunlei.com/';

const isLoginWX = () => {
    let tokenid = cookie.get('tokenid') || false;
    // let tokenids = ReactCookie.load('tokenid') || false;
    // console.log(tokenids);
    let openid = cookie.get('openid') || false;
    if (tokenid && openid && typeof tokenid !== 'undefined' && typeof tokenid !== 'undefined') {
        return true;
    } else {
        return false;
    }
}; 

const LoginWX = () => {
    let href = window.location.href;
    let redirectUri = encodeURIComponent(href);
    redirectUri = encodeURIComponent(
      h5url + 'wechat/openid?redirect=' + redirectUri
    );
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + redirectUri + '&response_type=code&scope=snsapi_base&state=login#wechat_redirect';
    window.location.href = url;
};

const BingXL = () => {
    let rem = '迅雷牛X页游平台';
    let openid = cookie.get('openid');
    let url =  h5url +  'user/xlaccount?a=query&rem=' + rem + '&openid=' + openid + '&appid=' + appid;
    Jsonp(url, {
        jsonpCallback: 'cb'
    })
    .then(response => response.json())
    .then(res => {
        if (res.data.state === 0) {
            bindXunLei();
        } else {
            bindSissonid();
            
        }
    });
};

const bindXunLei = () => {
    let openid = cookie.get('openid') || '';
    let href = window.location.href;
    let redirectUri = encodeURIComponent(href);
    let url = loginUrl + 'login.html?t=' + new Date().getTime() + '&openid=' + openid + '&appid=' + appid + '&url=' + redirectUri;
    window.location.href = url;
};

const bindSissonid = () => {
    let openid = cookie.get('openid') || 'ojZwIj_FZHfpLcOSeY9rDhetP-yA';
    let url = h5url + '/user/login_proxy?openid=' + openid;
    Jsonp(url, {
        jsonpCallback: 'cb'
    })
    .then(response => response.json())
    .then(res => {
        if(res.rtn == 11){
            // session 失效
            bindSissonid();
        }
    });
};

const Login = () => {
    if (!isLoginWX()) {
        LoginWX();
    } else {
        BingXL();
    }
};

export default Login;