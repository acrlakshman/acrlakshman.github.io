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
      <div className="content-body text-left">
        <Markdown content={content} />
      </div>
    );
  }
};

const _Project = (props: Props) => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '10px' }}>
      <Content id={ProfileField.Projects}>
        <SectionLabel label={props.sectionDetail.name} />
        {renderSectionBody(props.sectionDetail)}
      </Content>
    </div>
  );
};

export default _Project;
