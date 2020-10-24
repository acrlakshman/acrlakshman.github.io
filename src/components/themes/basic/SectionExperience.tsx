import React from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import Divider from './SectionDivider';

import { Work, WorkDetail } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';
import re_weburl from '../../../auxiliaries/regex-weburl';

interface ComponentProps {
  sectionDetail: Work;
  renderDividerAboveLabel?: boolean;
  renderDividerBelowLabel?: boolean;
}

const renderWorkHighlights = (highlights: string[]): JSX.Element => {
  if (highlights.length) {
    return (
      <ul>
        {highlights.map((item: string) => {
          return <li style={{ textAlign: 'left' }}>{item}</li>;
        })}
      </ul>
    );
  }

  return <div></div>;
};

const renderItem = (
  data: WorkDetail,
  key: string,
  className: string
): JSX.Element => {
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
            <b>
              {re_weburl.test(data.url || '') ? (
                <a href={data.url}>{data.name}</a>
              ) : (
                data.name
              )}
            </b>
          </div>
          {data.startDate && data.endDate ? (
            <div className="col-md-6" style={{ textAlign: 'right' }}>
              <i>
                {data.startDate} - {data.endDate}
              </i>
            </div>
          ) : (
            ''
          )}
        </div>
        <div style={{ textAlign: 'left' }}>{data.position}</div>
        {data.highlights.length ? <hr /> : ''}
        {renderWorkHighlights(data.highlights)}
      </div>
    </div>
  );
};

const renderSectionBody = (
  data: Work,
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
          })}
        </div>
      </div>
    </div>
  );
};

const Section = (props: ComponentProps) => {
  return (
    <Content id={ProfileField.Work}>
      {props.renderDividerAboveLabel && <Divider />}
      <SectionLabel label={props.sectionDetail.label} />
      {props.renderDividerBelowLabel && <Divider />}
      {renderSectionBody(
        props.sectionDetail,
        ProfileField.Work,
        'offset-md-2 col-md-8'
      )}
    </Content>
  );
};

export default Section;
