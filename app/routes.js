/* routes.js */

module.exports = {

  route: function(app) {
    app

      .get('/', function(req, res) {

      })

      .get('*', function(req, res) {
        res.redirect('/');
      })
  }

};