var app = require('./config/config.js');
var configuration = require('./config/prismic-configuration.js');
var Prismic = require('prismic.io');
var prismicObjectToJSON = require('./service/prismic.js');

function api(req, res) {
  // So we can use this information in the views
  res.locals.ctx = {
    endpoint: configuration.apiEndpoint,
    linkResolver: configuration.linkResolver
  };
  return prismic.api(configuration.apiEndpoint, {
    accessToken: configuration.accessToken,
    req: req
  });
}

function handleError(err, req, res) {
  if (err.status == 404) {
    res.status(404).send("404 not found");
  } else {
    res.status(500).send("Error 500: " + err.message);
  }
}

app.get('/', function(req, res) {
  Prismic.api(configuration.apiEndpoint + '?accessToken=' + configuration.accessToken)
  .then(function(api) {
    return api.query(Prismic.Predicates.at('document.type', 'home'));
  }).then(function(fetch) {
    res.render('pages/home', prismicObjectToJSON('page', fetch.results[0]));
  }, function(err) {
    res.render('pages/404', {page: 'home'});
  });
});

app.get('/:slug', function(req, res) {
  var slug = req.params.slug || 'home';
  Prismic.api(configuration.apiEndpoint + '?accessToken=' + configuration.accessToken)
  .then(function(api) {
    return api.query(Prismic.Predicates.at('document.type', slug));
  }).then(function(fetch) {
    res.render('pages/' + slug, prismicObjectToJSON('page', fetch.results[0]));
  }, function(err) {
    res.render('pages/404', {page: 'home'});
  });
});

app.listen(app.get('port'), function() {
  console.log('Let\'s start ! on port ', app.get('port'));
});
