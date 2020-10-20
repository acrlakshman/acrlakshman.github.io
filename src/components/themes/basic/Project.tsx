import React from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import { ProfileField } from '../../../types/fields';
import Markdown from './Markdown';

import { Project } from '../../../types/profileWeb';

import './styles.css';

interface Props {
  sectionDetail: Project;
}

const renderSectionBody = (sectionDetail: Project): JSX.Element | undefined => {
  if (sectionDetail.webPage) {
    const content = sectionDetail.webPage.detail;
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

const _Project = (props: Props) => {
  return (
    <Content id={ProfileField.Projects}>
      <SectionLabel label={props.sectionDetail.name} />
      <div className="divider">
        <span></span>
        <span>&#10038;</span>
        <span></span>
      </div>
      {renderSectionBody(props.sectionDetail)}
    </Content>
  );
};

export default _Project;
