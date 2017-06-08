// @flow

import React, { Component } from 'react';

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
