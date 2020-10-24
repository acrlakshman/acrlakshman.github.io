import React from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Divider from './SectionDivider';

import { Education, EducationDetail } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface ComponentProps {
  sectionDetail: Education;
  renderDividerAboveLabel?: boolean;
  renderDividerBelowLabel?: boolean;
}

const renderItem = (
  data: EducationDetail,
  key: string,
  className: string
): JSX.Element => {
  let imageSrc = data.major;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  console.log(className)

  return (
    <div key={key} className={className}>
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
            <b>{data.studyType || ''}</b>
          </div>
          {(data.startDate && data.endDate) ?
            (<div className="col-md-6" style={{ textAlign: 'right' }}>
              <i>
                {data.startDate} - {data.endDate}
              </i>
            </div>) : ''
          }
        </div>
        <div style={{ textAlign: 'left' }}>{data.major}</div>
        <div style={{ textAlign: 'left' }}>
          {data.minor ? `${data.minor} (minor)` : ''}&nbsp;
        </div>
      </div>
      <div
        className="col-md-12"
        style={{
          textAlign: 'left',
          marginTop: '-15px',
          fontSize: '14px',
        }}
      >
        <b>{data.institution || ''}</b>
      </div>
    </div>
  );
};

const renderSectionBody = (
  data: Education,
  keyPrefix: string,
  className: string
): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        <div
          className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start row align-content-start"
          style={{ marginLeft: '5px', marginRight: '5px' }}
        >
          {data.list.map((project, index) => {
              return project.render
                ? renderItem(project.value, `${keyPrefix}_${index}`, className)
                : '';
            })
          }
        </div>
      </div>
    </div>
  );
};

const Section = (props: ComponentProps) => {
  console.log(props.sectionDetail.list.length)
  return (
    <Content id={ProfileField.Projects}>
      {props.renderDividerAboveLabel && <Divider />}
      <SectionLabel label={props.sectionDetail.label} />
      {props.renderDividerBelowLabel && <Divider />}
      {renderSectionBody(
        props.sectionDetail,
        ProfileField.Projects,
        props.sectionDetail.list.length > 2 ? "col-md-4" : (props.sectionDetail.list.length === 2 ? "col-md-6" : "offset-3 col-md-6")
      )}
    </Content>
  );
};

export default Section;
