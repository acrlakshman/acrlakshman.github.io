import React from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Card from './Card';
import Divider from './SectionDivider';

import { Project, Projects } from '../../../types/profileWeb';
import {ProfileField} from '../../../types/fields'

import './styles.css';

interface Props {
  sectionDetail: Projects;
}

const renderProject = (projectDetail: Project, key: string): JSX.Element => {
  let imageSrc = projectDetail.thumbnail;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  return (
    <Card
      id={key}
      slugPrefix={`/project`}
      url={projectDetail.url}
      webPage={projectDetail.webPage}
      title={projectDetail.name}
      team={projectDetail.team}
      description={projectDetail.description}
      thumbnail={projectDetail.thumbnail}
    />
  );
};

const renderSectionBody = (sectionDetail: Projects, keyPrefix: string): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        {sectionDetail.list.map((project, index) => {
          return (project.render) ? renderProject(project.value, `${keyPrefix}_${index}`) : '';
        })}
      </div>
    </div>
  )
}

const Section = (props: Props) => {
  return (
    <Content id={ProfileField.Projects}>
      <Divider />
      <SectionLabel label={props.sectionDetail.label} />
      {renderSectionBody(props.sectionDetail, ProfileField.Projects)}
    </Content>
  );
};

export default Section;
