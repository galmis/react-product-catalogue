'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const helmet = require('helmet');

// for security
app.use(helmet());
app.disable('x-powered-by');

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  // console.log(`Listening on port ${PORT}`);
});
