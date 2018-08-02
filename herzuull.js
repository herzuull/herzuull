const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const helpers = require('./app/helpers')
const path = require('path')
const nunjucks = require('nunjucks')
const helmet = require('helmet')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redis = require('redis')

require('dotenv').config()

app.use(cookieParser())

var options = {
  secret: process.env.COOKIE_SECRET,
  cookie: {},
  store: new RedisStore({
    url: process.env.REDIS_URL,
  }),
  saveUninitialized: true,
  resave: false,
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  options.cookie.secure = true // serve secure cookies
}

console.log('ENV => ', process.env)

console.log('Session options > ', options)

app.use(session(options))

app.use(helmet())
app.disable('x-powered-by')

app.set('port', process.env.PORT || 1999)

// views is directory for all template files
app.set('views', path.join(__dirname, '/front'))
app.set('view engine', 'html')
helpers.init(
  nunjucks.configure('front', {
    express: app,
    watch: process.env.NODE_ENV !== 'production',
    autoescape: false,
  })
)

app.use(require('./app/routes')())

app.use(
  express.static(path.join(__dirname, '/front/assets/'), {
    maxAge: 31536000000,
  })
)

app.use(require('./app/controller/404'))

app.listen(app.get('port'), function() {
  console.log("Let's the fight begin ! on port ", app.get('port'))
})
