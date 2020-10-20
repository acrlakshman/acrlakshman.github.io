import React, { Component } from 'react';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';
import FooterBasic from './themes/basic/Footer';

import { Basics, Config } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface Props {
  config: Config;
  basics: Basics;
}

class Footer extends Component<Props> {
  renderItem = () => {
    if (this.props.config.theme.value === WebThemes.BASIC) {
      return (
        <FooterBasic config={this.props.config} basics={this.props.basics} />
      );
    }

    return <div></div>;
  };
  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config, basics: state.basics };
};

export default connect(mapStateToProps, {})(Footer);
