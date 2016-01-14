var View = require('../services/View.js');

module.exports = {
  index: function(req, res, next) {
    var locals = {
      title: 'Herzuull inc'
    };
    View({
      res: res,
      view: 'index',
      locals: locals
    });
  }
}
