import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Markdown from './Markdown';

import { Project, Projects } from '../../../types/profileWeb';
import {ProfileField} from '../../../types/fields'

import './styles.css';

interface Props {
  sectionDetail: Projects;
}

const renderTitle = (projectDetail: Project) => {
  console.log(projectDetail);
  if (projectDetail.webPage) {
    if (
      projectDetail.webPage.slug &&
      projectDetail.webPage.detail &&
      projectDetail.webPage.slug !== '' &&
      projectDetail.webPage.detail !== ''
    ) {
      if (!re_weburl.test(projectDetail.webPage.slug)) {
        return (
          <Link to={`/project/${projectDetail.webPage.slug}`}>
            {projectDetail.name}
          </Link>
        );
      } else {
        return (
          <a href={projectDetail.webPage.slug}>{projectDetail.name}</a>
        )
      }
    }
  }

  if (projectDetail.url && projectDetail.url !== '') {
    return (
      <a href={projectDetail.url}>{projectDetail.name}</a>
    )
  }

  return (
      projectDetail.name
    )
}

const renderTeam = (projectDetail: Project): JSX.Element | undefined => {
  if (projectDetail.team) {
    return <Markdown className="content-text" content={projectDetail.team} />;
  }
}

const renderDescription = (projectDetail: Project): JSX.Element => {
  return (
    <Markdown className="content-text" content={projectDetail.description} />
  );
}

const renderProject = (projectDetail: Project, key: string): JSX.Element => {
  let imageSrc = projectDetail.thumbnail;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  return (
    <div
      key={key}
      className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start border content-item"
    >
      <div className="col-md-2 content-card-img">
        <img
          className="img-fluid border rounded image-item"
          alt="thumbnail"
          src={imageSrc}
        />
      </div>
      <div className="col-md-10">
        <div className="content-text-bold">{renderTitle(projectDetail)}</div>
        {renderTeam(projectDetail)}
        {renderDescription(projectDetail)}
      </div>
    </div>
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
      <div className="divider">
        <span></span>
        <span>&#10038;</span>
        <span></span>
      </div>
      <SectionLabel label={props.sectionDetail.label} />
      {renderSectionBody(props.sectionDetail, ProfileField.Projects)}
    </Content>
  );
};

export default Section;
