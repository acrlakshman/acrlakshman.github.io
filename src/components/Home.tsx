import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { Config } from '../types/profileWeb';

interface Props extends RouteChildrenProps {
  config: Config;
}

class Home extends Component<Props> {
  componentDidMount() {}

  renderBody = (): JSX.Element => {
    return <Body />;
  };

  renderItem = () => {
    if (this.props.config.theme.render) {
      return (
        <div>
          <Header renderSectionsInNavBar={true} />
          {this.renderBody()}
          <Footer />
        </div>
      );
    }
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config };
};

export default connect(mapStateToProps, {})(Home);
