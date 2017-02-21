/*
  server.js - Express Server
 */

var
  path = require('path'),
  env = process.env.NODE_ENV,
  express = require('express'),
  app = express();

app.set('env', env || 'production');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'src/views'));

// CSS and JS come from ../dist
app.use('/static', express.static(path.join(__dirname, '../dist')));

// Inject live reload in development mode
if (env === 'development') {
  app.use(require('connect-livereload')({
    port: 12345
  }));
}

// Listen
var server = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('Listening at http://%s:%s', server.address().address, server.address().port);
});

// Routing in routes.js
require('./routes.js').route(app);
