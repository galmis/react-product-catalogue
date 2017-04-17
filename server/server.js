// @flow

// NOTE: Not finished!
// Server rendering isn't implemented, this is just an example of
// how it could work

import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';
import App from '../src/components/app/App';
import { renderToString } from 'react-dom/server';

const app = Express();
const port = process.env.PORT || 4000;

debugger;

//Serve static files
app.use('/static', Express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  debugger;
  // Create a new Redux store instance
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `;
}

app.listen(port)
