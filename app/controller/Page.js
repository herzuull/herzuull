module.exports = {
  get: function(req, res, next) {
    const slug = req.params.slug
    console.log('Page > ', slug, 'Session > ', req.session)
    if (['arts', 'games', 'contact'].indexOf(slug) !== -1) {
      req.currentLocation = req.path
      req.locals = Object.assign(
        res.locals,
        require(`../content/${req.session.locale}/${slug}.json`)
      )
      res.page = slug
      next()
    } else {
      next(slug + ' Not found')
    }
  },
}
