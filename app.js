var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 1999));

app.use(express.static(__dirname + '/www/'));

// views is directory for all template files
app.set('views', __dirname + '/www/');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Let\'s start ! on port ', app.get('port'));
});
