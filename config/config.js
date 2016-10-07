var express = require('express'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    http = require('http'),
    path = require('path'),
    expressLayouts = require('express-ejs-layouts');

module.exports = function() {
  var app = express();

  // all environments
  app.set('port', process.env.PORT || 1997);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  //app.use(favicon("public/images/punch.png"));
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../www')));

  app.use(errorHandler());

  return app;
}();
