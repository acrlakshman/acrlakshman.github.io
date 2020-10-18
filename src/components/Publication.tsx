import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import Header from './Header';
import Footer from './Footer';
import PublicationBasic from './themes/basic/Publication';

import { Config, ProfileSectionsWeb, SlugMap } from '../types/profileWeb';
import { ProfileField } from '../types/fields';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
  sections: ProfileSectionsWeb;
  slugMap: SlugMap;
}

interface ComponentState {
  slug: string;
}

class Publication extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { slug: this.props.match.params.id };
  }

  componentDidMount() {}

  renderBody = (): JSX.Element => {
    const idx = this.props.slugMap[ProfileField.Publications as string][
      this.state.slug
    ].position;

    if (
      this.props.sections.publications &&
      this.props.sections.publications.list[idx].render &&
      this.props.sections.publications.list[idx].value.webPage
    ) {
      return (
        <PublicationBasic
          sectionDetail={this.props.sections.publications.list[idx].value}
        />
      );
    } else {
      return <div></div>;
    }
  };

  renderItem = () => {
    if (this.props.config.theme.render) {
      return (
        <div>
          <Header renderSectionsInNavBar={false} />
          {this.renderBody()}
          <Footer />
        </div>
      );
    }
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    config: state.config,
    sections: state.sections,
    slugMap: state.slugMap,
  };
};

export default connect(mapStateToProps, {})(Publication);
