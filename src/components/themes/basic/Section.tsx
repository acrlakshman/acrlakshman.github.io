import React, { Component } from 'react';
import SectionPublications from './SectionPublications';
import SectionProjects from './SectionProjects';
import SectionCustom from './SectionCustom';
import SectionGallery from './SectionGallery';

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
            <SectionPublications
              sectionDetail={sectionDetail as Publications}
            />
          );
        case ProfileField.Projects:
          return <SectionProjects sectionDetail={sectionDetail as Projects} />;
        case ProfileField.Gallery:
          return <SectionGallery sectionDetail={sectionDetail as Gallery} />;
        default:
          return <div></div>;
      }
    }
  };

  renderCustomSection = (sectionDetail: CustomSection, key: string) => {
    if (sectionDetail && this.props.sectionName === ProfileField.Custom) {
      return (
        <SectionCustom
          class=""
          id={sectionDetail.label}
          key={key}
          label={sectionDetail.label}
          content={sectionDetail.value}
        />
      );
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
