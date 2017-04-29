// @flow

// NOTE: catch-all kind of approach, might want to make this more clever

import path from 'path';
import express from 'express';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';

import reducers from '../src/reducers';
import App from '../src/components/app/App';
import routes from '../src/routes';

const app = express();
const port = process.env.PORT || 4000;
const buildDir = `${__dirname}/../build`;

console.log('server code is running...');
// serve files in build directory
app.use(express.static(buildDir));

app.get('*', (req, res) => {
  debugger;
  console.log('app.get');
  //res.sendFile(path.resolve(buildDir, 'index.html'));
});


app.listen(port);
