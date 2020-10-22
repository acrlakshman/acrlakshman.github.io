import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionLabel from './SectionLabel';
import Content from './Content';
import Divider from './SectionDivider';
import Header from './Header';
import Footer from './Footer';
import Markdown from './Markdown';
import { StoreState } from '../../../reducers';

import {
  Basics,
  Config,
  Publication as PublicationType,
} from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface ComponentProps {
  config: Config;
  basics: Basics;
  data: PublicationType;
}

class Publication extends Component<ComponentProps> {
  renderContent = (data: PublicationType): JSX.Element | undefined => {
    if (data.webPage) {
      const content = data.webPage.detail;
      return (
        <div
          className="content-body text-left"
          style={{ margin: '2rem 2rem 0 2rem' }}
        >
          <Markdown content={content} />
        </div>
      );
    }
  };

  renderBody = () => {
    return (
      <Content id={ProfileField.Projects}>
        <SectionLabel label={this.props.data.title} />
        <Divider />
        {this.renderContent(this.props.data)}
      </Content>
    );
  };

  render() {
    return (
      <div className="wrapper-0">
        <div className="wrapper-1 rounded">
          <Header renderSectionsInNavBar={false} />
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
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config, basics: state.basics };
};

export default connect(mapStateToProps, {})(Publication);
