// @flow

import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import Footer from './Footer';
import Navigator from './Navigator';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
