import React from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight.js';
import SectionLabel from './SectionLabel';
import Content from './Content';
import Divider from './SectionDivider';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';

import { Publication } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface Props {
  sectionDetail: Publication;
}

interface ImageProps {
  src: string;
  alt: string;
}

const RenderImage = (props: ImageProps) => {
  let imageSrc = props.src;
  if (!re_weburl.test(props.src)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${props.src}`;
  }

  return (
    <img
      className="avatar"
      alt={props.alt}
      src={imageSrc}
      style={{ width: '150px', height: '150px', display: 'inherit' }}
    />
  );
};

interface CodeProps {
  language: string;
  value: string;
}

const RenderCode = (props: CodeProps) => {
  return <Highlight language={props.language}>{props.value}</Highlight>;
};

const renderers = {
  image: RenderImage,
  imageReference: RenderImage,
  code: RenderCode,
};

const renderSectionBody = (
  sectionDetail: Publication,
  keyPrefix: string
): JSX.Element | undefined => {
  if (sectionDetail.webPage) {
    const content = sectionDetail.webPage.detail;
    return (
      <div className="content-body text-left">
        <ReactMarkdown source={content} renderers={renderers}></ReactMarkdown>
      </div>
    );
  }
};

const _Publication = (props: Props) => {
  return (
    <Content id={ProfileField.Publications}>
      <SectionLabel label={props.sectionDetail.title} />
      <Divider />
      {renderSectionBody(props.sectionDetail, ProfileField.Publications)}
    </Content>
  );
};

export default _Publication;
