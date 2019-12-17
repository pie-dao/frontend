import React from 'react';
import './App.css';
import TopNavi from './Components/TopNavi';
import Hero from './Components/Hero';
import ComparisonTable from './Components/ComparisonTable';

function App() {
  return (
    <div className="App">
      <TopNavi/>
      <Hero/>
      <ComparisonTable/>
    </div>
  );
}

export default App;
