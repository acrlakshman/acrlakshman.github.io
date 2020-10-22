import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import CustomBasic from './themes/basic/Custom';

import { Basics, Config } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
  basics: Basics;
}

class Custom extends Component<ComponentProps> {
  renderItem = () => {
    if (this.props.config.theme.value === WebThemes.BASIC) {
      return (
        <CustomBasic
          slug={this.props.match.params.id}
          url={this.props.match.url}
        />
      );
    }

    return <div></div>;
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    config: state.config,
    basics: state.basics,
  };
};

export default connect(mapStateToProps, {})(Custom);
