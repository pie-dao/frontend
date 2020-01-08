import React from "react";
import "./App.css";
import TopNavi from "./Components/TopNavi";
import PasswordGate from "./Components/PasswordGate";
import Routes from "./routes";
import { Router } from "react-router-dom";
import ReactGA from "react-ga";

import { createBrowserHistory } from "history";

const instance = createBrowserHistory();

const trackingId = "UA-155747885-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

export const navigateTo = path => instance.push(path);

function App() {
  return (
    <Router history={instance}>
      <div className="App">
        <PasswordGate>
          <TopNavi />
          <Routes />
        </PasswordGate>
      </div>
    </Router>
  );
}

export default App;
