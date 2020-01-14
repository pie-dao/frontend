import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from './Pages/Home';
import Investment from './Pages/Investment';
import Charts from './Pages/Charts';
import Discord from './Pages/Discord';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
 
export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/investment" component={Investment} />
        <Route path="/charts" component={Charts} />
        <Route path="/discord" component={Discord} />
    </Switch>
  )
}