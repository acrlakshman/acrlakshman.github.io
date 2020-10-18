import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/project/:id" component={Project} />
          <Route path="/publication/:id" component={Publication} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {})(_App);
