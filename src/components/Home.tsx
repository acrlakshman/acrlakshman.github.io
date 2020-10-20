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
        <div className="wrapper-0">
          <div className="wrapper-1 rounded">
            <Header renderSectionsInNavBar={true} />
            {this.renderBody()}
          </div>
          <section className="content-section" style={{padding: "1.5rem 0 1.5rem 0", background: "transparent"}}></section>
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
