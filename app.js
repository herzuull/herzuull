var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 1999));

app.use(express.static(__dirname + '/www/'));
// views is directory for all template files
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('pages/index', {page: 'index'});
});

app.get('/drawings', function(req, res) {
  res.render('pages/drawings', {page: 'drawings'});
});

app.get('/games', function(req, res) {
  res.render('pages/games', {page: 'games'});
});

app.get('/cv', function(req, res) {
  res.render('pages/cv', {page: 'cv'});
});

app.listen(app.get('port'), function() {
  console.log('Let\'s start ! on port ', app.get('port'));
});
