import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Table from './components/Table/Table';
import Graph from './components/Graph/Graph';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path="/table" component={Table} />
      <Route path="/graph" component={Graph} />
    </div>
  </Router>,
  document.getElementById('root')
);
