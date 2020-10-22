import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../reducers';
import Introduction from './Introduction';
import Section from './Section';
import {
  getSortedArray,
  getProfileRankings,
} from '../../../auxiliaries/rankSections';
import sectionRanksTheme from './ranking';

import { Basics, ProfileSectionsWeb } from '../../../types/profileWeb';

interface Props {
  basics: Basics;
  sections: ProfileSectionsWeb;
}

interface State {
  sectionRanks: string[];
}

class Body extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { sectionRanks: [] };
  }

  componentDidMount() {
    let sectionRanksUser = getProfileRankings(this.props.sections);
    let sectionRanks = getSortedArray(sectionRanksTheme, sectionRanksUser);
    this.setState({ sectionRanks });
  }

  renderSections = () => {
    return this.state.sectionRanks.map((section: string) => {
      return (
        <Section
          key={section}
          sectionName={section}
          sections={this.props.sections}
        />
      );
    });
  };

  renderItem = () => {
    return (
      <>
        <Introduction basics={this.props.basics} />
        {this.renderSections()}
      </>
    );
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    config: state.config,
    basics: state.basics,
    sections: state.sections,
  };
};

export default connect(mapStateToProps, {})(Body);
