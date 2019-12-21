import React from 'react';
import './App.css';
import TopNavi from './Components/TopNavi';
import Main from './Components/Main';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopNavi/>
      <Main/>

    </div>
  );
}

export default App;
