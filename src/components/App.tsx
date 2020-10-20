import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Publication from './Publication';

import './App.css';

class _App extends Component {
  render() {
    return (
      <div>
        {/* <ConnectedRouter history={history}> */}
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project/:id" component={Project} />
              <Route exact path="/publication/:id" component={Publication} />
            </Switch>
          </BrowserRouter>
        {/* </ConnectedRouter> */}
      </div>
    );
  }
}

export default connect(null, {})(_App);
