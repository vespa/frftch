import 'babel-polyfill';
import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
