import React, { Component } from 'react';
import SectionLabel from './SectionLabel'
import SectionBody from './SectionBody';
import config from '../../../config';
import re_weburl from '../../../auxiliaries/regex-weburl'
import SocialProfiles from './SocialProfiles';

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
        <section id="introduction" className="content-section">
          <div className="container bg-white">
            <div className="container main-container">
                <div className="content">
                  <SectionLabel label={summary.label} />
                  <SectionBody class="summary text-left" value={summary.value} />
                </div>
            </div>
          </div>
        </section>
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
            <SocialProfiles profiles={this.props.basics.profiles} />
          </div>
        </section>
        {this.getSummary(this.props.basics.summary)}
      </div>
    );
  }
}

export default Introduction;
