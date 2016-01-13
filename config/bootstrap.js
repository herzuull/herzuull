/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var sails = require('sails');

module.exports.bootstrap = function(cb) {

  var app = sails.hooks.http.app;

  var env = require('nunjucks').configure('www', {express: app, watch: true});
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};

/*

 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html

var sails = require('sails');

module.exports.bootstrap = function(cb) {

  // express app object
  const { app } = sails.hooks.http;

  // consolidate fails at loading nunjucks properly.. let's set it up manualy here
  let env = require('nunjucks').configure('front', { express: app });

  // setup global custom helpers
  require('ags-template-helpers')(env);

  // setup project specific helpers
  require('./helpers').init(env);


  cb();

};
*/
