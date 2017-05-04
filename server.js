// server.js

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Secret Box';

app.get('/', function(request, response){
  response.send('It\'s a secret to everyone');
});

if(!module.parent) {
  app.listen(app.get('port'), function(){
    console.log(app.locals.title + ' is running on ' + app.get('port'))
  });
}

module.exports = app;