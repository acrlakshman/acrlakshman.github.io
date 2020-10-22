import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../reducers';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { Basics, Config } from '../../../types/profileWeb';

interface ComponentProps {
  config: Config;
  basics: Basics;
}

class Home extends Component<ComponentProps> {
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
          <section
            className="content-section"
            style={{ padding: '1.5rem 0 1.5rem 0', background: 'transparent' }}
          ></section>
          <Footer config={this.props.config} basics={this.props.basics} />
        </div>
      );
    }
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config, basics: state.basics };
};

export default connect(mapStateToProps, {})(Home);
