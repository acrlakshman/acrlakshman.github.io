import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
// import Card from './Card';
import Divider from './SectionDivider';

import { Education, EducationDetail } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface ComponentProps {
  sectionDetail: Education;
  limitItemsToRender?: boolean;
  renderDividerAboveLabel?: boolean;
  renderDividerBelowLabel?: boolean;
}

const renderProject = (
  projectDetail: EducationDetail,
  key: string
): JSX.Element => {
  let imageSrc = projectDetail.major;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  return (
    <div key={key} className="col-md-6">
      <div
        className="col-md-12 border"
        style={{
          padding: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <div className="row">
          <div className="col-md-6" style={{ textAlign: 'left' }}>
            <b>{projectDetail.studyType}</b>
          </div>
          {/* <div className="col-md-6" style={{ textAlign: 'right' }}>
            <i>
              {projectDetail.startDate} - {projectDetail.endDate}
            </i>
          </div> */}
        </div>
        <div style={{ textAlign: 'left' }}>{projectDetail.major}</div>
        <div style={{ textAlign: 'left' }}>
          {projectDetail.minor ? `${projectDetail.minor} (minor)` : ''}&nbsp;
        </div>
        {/* <div style={{ textAlign: 'left' }}>Computer Science (minor)</div> */}
        {/* <div style={{ textAlign: 'right' }}>
          <i>University of Wisconsin-Madison Madison Madison</i>
        </div> */}
      </div>
      <div
        className="col-md-12"
        style={{
          textAlign: 'left',
          // paddingLeft: '5px',
          marginTop: '-15px',
          fontSize: '14px',
        }}
      >
        <b>{projectDetail.institution || ''}</b>
      </div>
    </div>
  );

  // return (
  //   <Card
  //     key={key}
  //     id={key}
  //     slugPrefix={`/project`}
  //     url={projectDetail.url}
  //     title={''}
  //     team={''}
  //     description={''}
  //     thumbnail={''}
  //   />
  // );
};

const renderOverflowButton = () => {
  return (
    <Link key={'projects'} to="/projects">
      <div style={{ textAlign: 'end' }}>
        <Button variant="primary">Full Projects List {'>>'}</Button>
      </div>
    </Link>
  );
};

const renderSectionBody = (
  sectionDetail: Education,
  keyPrefix: string,
  limitItemsToRender: boolean
): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        <div
          // className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start content-item"
          className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start row align-content-start"
          style={{ marginLeft: '5px', marginRight: '5px' }}
        >
          {(() => {
            let count = 0;
            let maxItems = sectionDetail.maxItemsToRender
              ? sectionDetail.maxItemsToRender
              : sectionDetail.list.length <=
                config.maxItemsToRenderInHomePage.projects
              ? sectionDetail.list.length
              : config.maxItemsToRenderInHomePage.projects;

            return sectionDetail.list.map((project, index) => {
              return project.render && count < maxItems
                ? (limitItemsToRender && ++count,
                  renderProject(project.value, `${keyPrefix}_${index}`))
                : project.render && count === maxItems
                ? (++count, renderOverflowButton())
                : '';
            });
          })()}
        </div>
      </div>
    </div>
  );
};

const Section = (props: ComponentProps) => {
  return (
    <Content id={ProfileField.Projects}>
      {props.renderDividerAboveLabel && <Divider />}
      <SectionLabel label={props.sectionDetail.label} />
      {props.renderDividerBelowLabel && <Divider />}
      {renderSectionBody(
        props.sectionDetail,
        ProfileField.Projects,
        props.limitItemsToRender || false
      )}
    </Content>
  );
};

export default Section;
