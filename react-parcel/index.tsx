import React from "react";
import ReactDOM from "react-dom";

const App = () => <p>开始Typescript的React</p>;

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
// }
// if (module.hot) {
//   module.hot.dispose(function () {
//     // 模块即将被替换时
//     console.log('模块替换')
//   });

//   module.hot.accept(function () {
//     // 模块或其依赖项之一刚刚更新时
//     console.log('模块更新')
//   });
// }
