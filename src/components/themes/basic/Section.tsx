import React, { Component } from 'react';
import Loadable from 'react-loadable';
// import SectionPublications from './SectionPublications';
// import SectionProjects from './SectionProjects';
// import SectionCustom from './SectionCustom';
// import SectionGallery from './SectionGallery';

import {
  CustomSection,
  ProfileCustomSection,
  ProfileSections,
  ProfileSectionsWeb,
  Projects,
  Publications,
  Gallery,
} from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface Props {
  sectionName: string;
  sections: ProfileSectionsWeb;
}

export const sectionListHasRender = <
  T extends ProfileSections[K],
  K extends keyof ProfileSections
>(
  sectionDetail: T
): boolean => {
  if (sectionDetail) {
    for (let i = 0; i < sectionDetail.list.length; i++) {
      if (sectionDetail.list[i].render) return true;
    }
  }

  return false;
};

const sectionCustomHasRender = <T extends ProfileCustomSection[K], K extends keyof ProfileCustomSection>(sectionDetail: T): boolean => {
  if (sectionDetail) {
    for (let i = 0; i < sectionDetail.length; i++) {
      if (sectionDetail[i].render) return true;
    }
  }

  return false;
}

const LoadableSectionPublications = Loadable({
  loader: () => import('./SectionPublications'),
  loading() {
    return <div></div>;
  },
});

const LoadableSectionProjects = Loadable({
  loader: () => import('./SectionProjects'),
  loading() {
    return <div></div>;
  },
});

const LoadableSectionGallery = Loadable({
  loader: () => import('./SectionGallery'),
  loading() {
    return <div></div>;
  },
});

const LoadableSectionCustom = Loadable({
  loader: () => import('./SectionCustom'),
  loading() {
    return <div></div>;
  },
});

class Section extends Component<Props> {
  renderSection = <
    T extends ProfileSections[K],
    K extends keyof ProfileSections
  >(
    sectionDetail: T
  ): JSX.Element | undefined => {
    if (sectionDetail) {
      switch (this.props.sectionName) {
        case ProfileField.Publications:
          return (
            <LoadableSectionPublications
              sectionDetail={sectionDetail as Publications}
            />
          );
        case ProfileField.Projects:
          return (
            <LoadableSectionProjects
              sectionDetail={sectionDetail as Projects}
            />
          );
        case ProfileField.Gallery:
          return (
            <LoadableSectionGallery sectionDetail={sectionDetail as Gallery} />
          );
        default:
          return <div></div>;
      }
    }
  };

  renderCustomSection = (sectionDetail: CustomSection, key: string) => {
    if (
      sectionDetail &&
      this.props.sectionName === ProfileField.Custom &&
      sectionDetail.render
    ) {
      if (sectionDetail.value) {
        return (
          <LoadableSectionCustom
            class=""
            id={sectionDetail.label}
            key={key}
            label={sectionDetail.label}
            content={sectionDetail.value}
          />
        );
      }
    }
  };

  renderItem = () => {
    let sectionName = this.props.sectionName as keyof ProfileSectionsWeb;
    let sectionDetail = this.props.sections[sectionName];

    if (sectionDetail && !(sectionDetail instanceof Array)) {
      if (sectionListHasRender(sectionDetail)) {
        return this.renderSection(sectionDetail)
      }
    } else if (sectionDetail instanceof Array) {
      if (sectionCustomHasRender(sectionDetail)) {
        return sectionDetail.map((section: CustomSection, index: number) => {
            return this.renderCustomSection(section, `${this.props.sectionName}_${index}`)
          });
      }
    }
  };

  render() {
    return <>{this.renderItem()}</>;
  }
}

export default Section;
