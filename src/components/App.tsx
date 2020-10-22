import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Publication from './Publication';
import Custom from './Custom';

class _App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Home} />
            <Route exact path="/publications" component={Home} />
            <Route exact path="/project/:id" component={Project} />
            <Route exact path="/publication/:id" component={Publication} />
            <Route exact path="/:id" component={Custom} />
            <Route exact path="/:id/:id" component={Custom} />
            <Route exact path="/:id/:id/:id" component={Custom} />
            <Route component={Custom} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {})(_App);
