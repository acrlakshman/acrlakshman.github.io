import React, { Component } from 'react';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';
import BodyBasic from './themes/basic/Body';

import { BasicValueType } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface Props {
  theme: BasicValueType;
}

class Body extends Component<Props> {
  renderItem = () => {
    if (this.props.theme.value === WebThemes.BASIC) {
      return <BodyBasic />;
    }

    return <div></div>;
  };
  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.config.theme };
};

export default connect(mapStateToProps, {})(Body);
