'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _reducers = require('../src/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('../src/components/app/App');

var _App2 = _interopRequireDefault(_App);

var _routes = require('../src/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// NOTE: catch-all kind of approach, might want to make this more clever

var port = process.env.PORT || 4000;
var buildDir = __dirname + '/../build';

console.log('server code is running...');
// serve files in build directory
app.use(_express2.default.static(buildDir));

app.get('*', function (req, res) {
  console.log('app.get');
  res.sendFile(_path2.default.resolve(buildDir, 'index.html'));
});

app.listen(port);