// @flow

import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import './App.css';

import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          {this.props.children}
          <Footer />
        </Grid>
      </div>
    );
  }
}
