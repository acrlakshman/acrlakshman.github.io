import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import HomeBasic from './themes/basic/Home';

import { Config } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface Props {
  config: Config;
}

class Home extends Component<Props> {
  componentDidMount() {
    console.log(this.props);
  }
  renderPage = () => {
    if (this.props.config.theme.render) {
      switch (this.props.config.theme.value) {
        case WebThemes.BASIC:
          return <HomeBasic />;
        default:
          return <div></div>;
      }
    }

    return <div></div>;
  };

  render() {
    return this.renderPage();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config };
};

export default connect(mapStateToProps, {})(Home);
