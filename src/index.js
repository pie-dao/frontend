import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Seo from "./Components/Seo";
import config from './utils/config';

ReactDOM.render(
  <>
    <Seo
      title={config.siteName}
      description={config.description}
      url={`${config.siteUrl}`}
      image={config.image}
      keywords={config.keywords}
    />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
