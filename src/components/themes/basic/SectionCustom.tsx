import React, { Component } from 'react';
import Markdown from './Markdown';
import Content from './Content';
import SectionLabel from './SectionLabel';

import 'react-image-gallery/styles/css/image-gallery.css';
import './styles.css';

interface ComponentProps {
  class: string;
  id: string;
  label: string;
  content: string;
}

class Section extends Component<ComponentProps> {
  render() {
    return (
      <Content id={this.props.id}>
        <div className="divider">
          <span></span>
          <span>&#10038;</span>
          <span></span>
        </div>
        <SectionLabel label={this.props.label} />
        <Markdown content={this.props.content} />
      </Content>
    );
  }
};

export default Section;
