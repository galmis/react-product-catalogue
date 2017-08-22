// @flow

import React, { Component } from 'react';

// It turns out that the Google Bot uses a different version of V8 from
// the latest Chrome, and apparently doesn’t support the same EcmaScript feature set.
import 'babel-polyfill';

import { Grid } from 'react-bootstrap';

import Footer from './Footer';
import NavigatorContainer from './NavigatorContainer';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <NavigatorContainer />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
