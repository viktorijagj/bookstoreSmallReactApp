import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "./books";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <div>
    <Provider>
      <App />
    </Provider>
  </div>
);
