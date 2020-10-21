import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import CustomBasic from './themes/basic/Custom';

import { Basics, Config, CustomSection, SlugMap } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
  basics: Basics;
  sections?: CustomSection[];
  slugMap: SlugMap;
}

class Custom extends Component<ComponentProps> {
  componentDidMount() {
    console.log(this.props);
  }
  renderItem = () => {
    if (this.props.config.theme.value === WebThemes.BASIC) {
      return (
        <CustomBasic
          slug={this.props.match.params.id}
          url={this.props.match.url}
          config={this.props.config}
          basics={this.props.basics}
          sections={this.props.sections}
          slugMap={this.props.slugMap}
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
    sections: state.sections.custom,
    slugMap: state.slugMap,
  };
};

export default connect(mapStateToProps, {})(Custom);
