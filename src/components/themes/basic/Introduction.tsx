import React, { Component } from 'react';
import Content from './Content'
import SectionLabel from './SectionLabel'
import SectionBody from './SectionBody';
import config from '../../../config';
import re_weburl from '../../../auxiliaries/regex-weburl'

import { Basics, BasicValueType } from '../../../types/profileWeb';

import './styles.css';

interface ComponentProps {
  basics: Basics
}

interface ComponentState {
  image: string
}

class Introduction extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { image: '' };
  }

  getAvatarElement = (image: BasicValueType) => {
    if (image.render) {
      let backgroundImage = '';
      if (re_weburl.test(image.value)) {
        backgroundImage = `url(${image.value})`;
      } else {
        backgroundImage = `url(${process.env.PUBLIC_URL}/${config.imagesPath}/${image.value})`;
      }
      
      return (
        <div
          className="avatar"
          style={{
            backgroundImage,
          }}
        ></div>
      );
    }
  };

  getLabelElement = (label: BasicValueType) => {
    if (label.render) {
      return (
        <div className="text-center label">
          <p>{label.value}</p>
        </div>
      );
    }
  };

  getSummary = (summary: BasicValueType) => {
    if (summary.render) {
      return (
        <Content id="introduction">
          <SectionLabel label={summary.label} />
          <SectionBody class="summary text-left" value={summary.value} />
        </Content>
      );
    }
  };

  render() {
    return (
      <div>
        <section className="content-section introduction">
          <div className="container">
            {this.getAvatarElement(this.props.basics.image)}
            {this.getLabelElement(this.props.basics.label)}
          </div>
        </section>
        {this.getSummary(this.props.basics.summary)}
      </div>
    );
  }
}

export default Introduction;
