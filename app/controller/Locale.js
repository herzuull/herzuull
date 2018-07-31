module.exports = {
  update: function(req, res, next) {
    const locales = process.env.LOCALES.split(',')
    req.session.locale =
      req.params.locale && locales.indexOf(req.params.locale) !== -1
        ? req.params.locale
        : res.session.locale
    res.redirect('back')
  },
  set: function(req, res, next) {
    if (!!!req.session.locale) {
      req.session.locale = 'en'
    }
  },
}
