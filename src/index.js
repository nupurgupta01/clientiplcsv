import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Page from './page';
import BatsmanPage from './batsmanPage'
import './index.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/bowling/:id" component={Page} />
      <Route path="/batsman/:id" component={BatsmanPage} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
