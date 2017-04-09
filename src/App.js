import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import './App.css';
import Blah from './Blah';
import Woah from './Blah';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <Route path="/" component={Blah} />
      </Router>
    );
  }
}

export default App;
