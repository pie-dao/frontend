import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Charts from './Pages/Charts';
import Discord from './Pages/Discord';
import AddRemove from './Pages/AddRemove';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
 
export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/charts" component={Charts} />
        <Route path="/discord" component={Discord} />
        <Route path="/add-remove" component={AddRemove} />
    </Switch>
  )
}