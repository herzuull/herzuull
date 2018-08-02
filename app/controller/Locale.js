module.exports = {
  update: function(req, res, next) {
    const locales = process.env.LOCALES.split(',')
    console.log('Session > ', req.session)
    req.session.locale =
      req.params.locale && locales.indexOf(req.params.locale) !== -1
        ? req.params.locale
        : res.session.locale
    console.log('Session > ', req.session)
    res.redirect('back')
  },
  set: function(req, res, next) {
    if (!!!req.session.locale) {
      req.session.locale = process.env.DEFAULT_LOCALE
    }
  },
}
