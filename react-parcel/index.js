import React from "react";
import ReactDOM from "react-dom";
import "./index.styl";

const App = () => (
  <div className="App">
    <h2>Hello Parcel</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}