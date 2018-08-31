import React from 'react';
import Header from '../src/components/Header';
import MainMenu from '../src/components/Header/MainMenu';
// import { connect } from 'react-redux';

/* eslint-disable react/prefer-stateless-function */
class Index extends React.Component {
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

export default Index;
