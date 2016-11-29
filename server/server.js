import Express from 'express'
import compression from 'compression'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import IntlWrapper from '../client/modules/Intl/IntlWrapper'
import connectMongo from 'connect-mongo'
import session from 'express-session'
import passport from 'passport'
import BasicStrategy from 'passport-local'
import User from './models/user'
import cuid from 'cuid'

// Webpack Requirements
import webpack from 'webpack'
import config from '../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Initialize the Express App
const app = new Express()
const MongoStore = connectMongo(session)

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

// React And Redux Setup
import { configureStore } from '../client/store'
import { Provider } from 'react-redux'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import Helmet from 'react-helmet'

// Import required modules
import routes from '../client/routes'
import { fetchComponentData } from './util/fetchData'
import api from './routes/api.routes'
import serverConfig from './config'

// Set native promises as mongoose promise
mongoose.Promise = global.Promise

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!') // eslint-disable-line no-console
    throw error
  }
})

// Apply body Parser and server public assets and routes
app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../dist')))
app.use(session({
  secret: 'keyboard cat',
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


/* passport stuff move i will move this into its own module once i get it working */
const basicStrategy = new BasicStrategy(
  {
    passReqToCallback: true
  },
  (req, username, password, done) => {
    const signup = req.body.signup

    User.findOne({ username, password })
      .then(user => {
        if (user) {
          return done(null, user)
        } else if (signup) {
          return new User({ username, password, id: cuid() })
            .save()
            .then(newUser => {
              return done(null, newUser)
            })
        }

        return done(null, false)
      })
      .catch(err => done(err, false))
  }
)
passport.use(basicStrategy)


app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    const failed = () => res.send({ data: null })

    if (err) return next(err)
    if (!user) return failed()
    req.logIn(user, (err) => {
      if (err) return failed()
      return res.send({ data: user })
    })
  })(req, res, next)
})


app.put('/api/logout', (req, res) => {
  req.logOut()
  res.status(204).end()
})

app.use('/api', api)


// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind()

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets)
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets)

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          ${process.env.NODE_ENV === 'production' ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)}
          //]]>` : ''}
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `
}

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;'
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : ''
  return renderFullPage(`Server Error${errTrace}`, {})
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore()
    // put the user into the store in this request because making server side requests in the need doesn't have the credentials/cookies
    store.dispatch({
      type: 'SET_USER',
      user: req.user || null
    })

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <IntlWrapper>
              <RouterContext {...renderProps} />
            </IntlWrapper>
          </Provider>
        );
        const finalState = store.getState()

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState))
      })
      .catch((error) => next(error))
  });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`) // eslint-disable-line
  }
})

export default app;
