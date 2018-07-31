module.exports = function(req, res, next) {
  if (!req.session.locale) {
    req.session.locale = 'en'
  }
  const sections = require(`../content/${req.session.locale}/Sections`).sections
  console.log(sections)
  res.locals = {
    locale: req.session.locale,
    menu: {
      home: sections[0],
      arts: sections[1],
      games: sections[2],
      contact: sections[3],
    },
  }
  console.log(req.locals)
  next()
}
