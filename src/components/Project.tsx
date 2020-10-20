import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import Header from './Header';
import Footer from './Footer';
import ProjectBasic from './themes/basic/Project';

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

class Project extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { slug: this.props.match.params.id };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBody = (): JSX.Element => {
    const idx = this.props.slugMap[ProfileField.Projects as string][
      this.state.slug
    ].position;

    if (
      this.props.sections.projects &&
      this.props.sections.projects.list[idx].render &&
      this.props.sections.projects.list[idx].value.webPage
    ) {
      return (
        <ProjectBasic
          sectionDetail={this.props.sections.projects.list[idx].value}
        />
      );
    } else {
      return <div></div>;
    }
  };

  renderItem = () => {
    if (this.props.config.theme.render) {
      return (
        <div className="wrapper-0">
          <div className="wrapper-1 rounded">
            <Header renderSectionsInNavBar={false} />
            {this.renderBody()}
          </div>
          <section
            className="content-section"
            style={{ padding: '1.5rem 0 1.5rem 0', background: 'transparent' }}
          ></section>
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

export default connect(mapStateToProps, {})(Project);
