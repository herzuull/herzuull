module.exports = {
  get: function(req, res, next) {
    var locals = {
      title: 'Herzuull inc.',
      value: 'Dep'
    };
    res.render('homepage', locals);
  }
}
