import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Plan from './components/Plan/Plan';
import Graph from './components/Graph/Graph';
import Debts from './components/Debts/Debts';
import Contribution from './components/Contribution/Contribution';
import Strategy from './components/Strategy/Strategy';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path="/table" component={Plan} />
      <Route path="/graph" component={Graph} />
      <Route path="/debts" component={Debts} />
      <Route path="/contribution" component={Contribution} />
      <Route path="/strategy" component={Strategy} />
    </div>
  </Router>,
  document.getElementById('root')
);
