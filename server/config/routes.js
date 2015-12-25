/**
 * Routes for express app
 */
var express = require('express');
var _ = require('lodash');
var App = require('../../public/assets/app.server');

module.exports = function(app) {

  app.get('*', function (req, res, next) {
    App(req, res);
  });

};
