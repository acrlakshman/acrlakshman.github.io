import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Markdown from './Markdown';

import {
  ArticleTypeWeb,
  BookTypeWeb,
  InCollectionTypeWeb,
  MiscTypeWeb,
  Publication,
  Publications,
  TechReportTypeWeb,
  ThesisTypeWeb,
  UnPublishedTypeWeb,
} from '../../../types/profileWeb';
import {
  ProfileField,
  PublicationTypes,
  ThesisTypes,
} from '../../../types/fields';

import './styles.css';

interface Props {
  sectionDetail: Publications;
}

const renderTitle = (publicationDetail: Publication) => {
  if (publicationDetail.webPage) {
    if (
      publicationDetail.webPage.slug &&
      publicationDetail.webPage.detail &&
      publicationDetail.webPage.slug !== '' &&
      publicationDetail.webPage.detail !== ''
    ) {
      if (!re_weburl.test(publicationDetail.webPage.slug)) {
        return (
          <Link to={`/publication/${publicationDetail.webPage.slug}`}>
            {publicationDetail.title}
          </Link>
        );
      } else {
        return (
          <a href={publicationDetail.webPage.slug}>{publicationDetail.title}</a>
        );
      }
    }
  }

  if (publicationDetail.url && publicationDetail.url !== '') {
    return <a href={publicationDetail.url}>{publicationDetail.title}</a>;
  }

  return publicationDetail.title;
};

const renderAuthors = (
  publicationDetail: Publication
): JSX.Element | undefined => {
  if (publicationDetail.author) {
    return (
      <Markdown className="content-text" content={publicationDetail.author} />
    );
  }
};

const renderArticleMeta = (publicationDetail: ArticleTypeWeb): JSX.Element => {
  return (
    <div className="content-text">
      <i>{publicationDetail.journal}</i>, {publicationDetail.volume}:
      {publicationDetail.pages}, {publicationDetail.year}.
    </div>
  );
};

const renderBookMeta = (publicationDetail: BookTypeWeb): JSX.Element => {
  if (!publicationDetail.series) {
    return (
      <div className="content-text">
        {publicationDetail.address},{' '}
        {publicationDetail.edition
          ? (() => `${publicationDetail.edition} edition, `)()
          : ''}
        {publicationDetail.year}
      </div>
    );
  } else {
    return (
      <div className="content-text">
        {publicationDetail.volume
          ? (() => `Volume ${publicationDetail.volume} of `)()
          : ''}
        <i>{publicationDetail.series}.</i> {publicationDetail.publisher},{' '}
        {publicationDetail.address}, {publicationDetail.year}.
      </div>
    );
  }
};

const renderThesisMeta = (publicationDetail: ThesisTypeWeb): JSX.Element => {
  return (
    <div className="content-text">
      {(() => {
        switch (publicationDetail.category) {
          case ThesisTypes.PhD:
            return 'PhD Thesis';
          case ThesisTypes.Masters:
            return 'Masters Thesis';
          case ThesisTypes.Bachelors:
            return 'Bachelors Thesis';
          default:
            return 'Thesis';
        }
      })()}
      , {publicationDetail.address}, {publicationDetail.year}
    </div>
  );
};

const renderTechReportMeta = (
  publicationDetail: TechReportTypeWeb
): JSX.Element => {
  return (
    <div className="content-text">
      {publicationDetail.series}, {publicationDetail.address},{' '}
      {publicationDetail.year}
    </div>
  );
};

const renderInCollectionMeta = (
  publicationDetail: InCollectionTypeWeb
): JSX.Element => {
  return (
    <div className="content-text">
      In {publicationDetail.editor}, editor,{' '}
      <i>{publicationDetail.booktitle}</i>, pages {publicationDetail.year}.{' '}
      {publicationDetail.publisher}, {publicationDetail.address},{' '}
      {publicationDetail.year}
    </div>
  );
};

const renderMiscMeta = (publicationDetail: MiscTypeWeb): JSX.Element => {
  return <div className="content-text">{publicationDetail.howpublished}</div>;
};

const renderUnPublishedMeta = (
  publicationDetail: UnPublishedTypeWeb
): JSX.Element => {
  return (
    <div className="content-text">
      {publicationDetail.note}
      {(() => {
        return publicationDetail.year ? `, ${publicationDetail.year}.` : '.';
      })()}
    </div>
  );
};

const renderPublicationMeta = (publicationDetail: Publication): JSX.Element => {
  switch (publicationDetail.type) {
    case PublicationTypes.Article:
      return renderArticleMeta(publicationDetail as ArticleTypeWeb);
    case PublicationTypes.Book:
      return renderBookMeta(publicationDetail as BookTypeWeb);
    case PublicationTypes.Thesis:
      return renderThesisMeta(publicationDetail as ThesisTypeWeb);
    case PublicationTypes.TechReport:
      return renderTechReportMeta(publicationDetail as TechReportTypeWeb);
    case PublicationTypes.InCollection:
      return renderInCollectionMeta(publicationDetail as InCollectionTypeWeb);
    case PublicationTypes.Misc:
      return renderMiscMeta(publicationDetail as MiscTypeWeb);
    case PublicationTypes.UnPublished:
      return renderUnPublishedMeta(publicationDetail as UnPublishedTypeWeb);
    default:
      return <div></div>;
  }
};

const renderPublication = (
  publicationDetail: Publication,
  key: string
): JSX.Element => {
  let imageSrc = publicationDetail.thumbnail;
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
          className="img-fluid rounded image-item"
          alt="thumbnail"
          src={imageSrc}
        />
      </div>
      <div className="col-md-10">
        <div className="content-text-bold">
          {renderTitle(publicationDetail)}
        </div>
        {renderAuthors(publicationDetail)}
        {renderPublicationMeta(publicationDetail)}
      </div>
    </div>
  );
};

const renderSectionBody = (
  sectionDetail: Publications,
  keyPrefix: string
): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        <div className="content">
          {sectionDetail.list.map((publication, index) => {
            return publication.render
              ? renderPublication(publication.value, `${keyPrefix}_${index}`)
              : '';
          })}
        </div>
      </div>
    </div>
  );
};

const Section = (props: Props) => {
  return (
    <Content id={ProfileField.Publications}>
      <SectionLabel label={props.sectionDetail.label} />
      {renderSectionBody(props.sectionDetail, ProfileField.Publications)}
    </Content>
  );
};

export default Section;
