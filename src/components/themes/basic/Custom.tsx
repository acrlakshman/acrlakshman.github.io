import React, { Component } from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import { ProfileField } from '../../../types/fields';
import Markdown from './Markdown';
import Divider from './SectionDivider';

import './styles.css';
import {
  Basics,
  Config,
  CustomSection,
  SlugMap,
} from '../../../types/profileWeb';
import Header from './Header';
import Footer from './Footer';

interface ComponentProps {
  slug: string;
  url: string;
  config: Config;
  basics: Basics;
  sections?: CustomSection[];
  slugMap: SlugMap;
}

class Custom extends Component<ComponentProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }

  renderBody = (): JSX.Element => {
    const url = this.props.url.replace('/', '');
    const idx = this.props.slugMap[ProfileField.Custom as string][url]
      ?.position;

    if (
      this.props.sections &&
      this.props.sections[idx] &&
      this.props.sections[idx].render &&
      this.props.sections[idx].webPage?.detail
    ) {
      return (
        <Content id={''}>
          <SectionLabel label={this.props.sections[idx].label} />
          <Divider />
          <div
            className="content-body text-left"
            style={{ margin: '2rem 2rem 0 2rem' }}
          >
            <Markdown
              content={this.props.sections[idx].webPage?.detail || ''}
            />
          </div>
        </Content>
      );
    } else {
      return <div>Page not found</div>;
    }
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

export default Custom;
