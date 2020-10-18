import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import HeaderBasic from './themes/basic/Header';

import { BasicValueType } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface Props {
  renderSectionsInNavBar: boolean;
  theme: BasicValueType;
}

class Header extends Component<Props> {
  renderitem = (): JSX.Element => {
    if (this.props.theme.value === WebThemes.BASIC) {
      return (
        <HeaderBasic
          renderSectionsInNavBar={this.props.renderSectionsInNavBar}
        />
      );
    }

    return <div></div>;;
  };

  render() {
    return this.renderitem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.config.theme };
};

export default connect(mapStateToProps, {})(Header);
