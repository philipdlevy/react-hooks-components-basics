import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Article() {
    return (
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
