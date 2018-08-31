import React from 'react';
import { connect } from 'react-redux';
import Header from '../src/components/Header';
import MainMenu from '../src/components/Header/MainMenu';


/* eslint-disable react/prefer-stateless-function */
class Index extends React.Component {
  static getInitialProps() {
    return { };
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <MainMenu />
        </Header>
      </React.Fragment>
    );
  }
}

export default connect()(Index);
