module.exports = {
  index: function(req, res, next) {
    var locals = {
      title: 'Herzuull inc.'
    };
    res.render('index.html', locals);
  }
}
