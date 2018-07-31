const express = require('express')
const Base = require('./controller/Base')
const Home = require('./controller/Home')
const Page = require('./controller/Page')
const Contact = require('./controller/Contact')
const Locale = require('./controller/Locale')
const Render = require('./render')

module.exports = function() {
  const app = express.Router()

  app.use(Base)

  app.get('/locale/:locale', Locale.update, Render)

  app.get('/', Home.get, Render)
  app.get('/:slug', Page.get, Render)
  app.get('/contact', Contact.get, Render)

  return app
}
