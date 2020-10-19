import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Publication from './Publication';

import './App.css';

type Params = {
  id: string;
};

class _App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project/:id" exact component={Project} />
            <Route path="/publication/:id" exact component={Publication} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {})(_App);
