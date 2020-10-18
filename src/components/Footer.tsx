import React, { Component } from 'react';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';
import FooterBasic from './themes/basic/Footer';

import { Basics, BasicValueType } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface Props {
  theme: BasicValueType;
  basics: Basics;
}

class Footer extends Component<Props> {
  renderItem = () => {
    if (this.props.theme.value === WebThemes.BASIC) {
      return <FooterBasic basics={this.props.basics} />;
    }

    return <div></div>;
  };
  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.config.theme, basics: state.basics };
};

export default connect(mapStateToProps, {})(Footer);
