module.exports = {
  get: function(req, res, next) {
    req.currentLocation = '/'
    req.locals = Object.assign(res.locals, require(`../content/${req.session.locale}/home.json`))
    res.page = 'home'
    next()
  },
}
