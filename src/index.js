import ReactDOM from "react-dom";
import React from "react";
import { App } from "./app/app";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(<App />, document.getElementById("root"));
