/* eslint-disable global-require */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/App/App'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostDetailPage/PostDetailPage')
  require('./modules/Book/pages/BookListPage/BookListPage')
  require('./modules/User/pages/LoginPage/LoginPage')
  require('./modules/Dashboard/pages/DashboardPage/DashboardPage')
  require('./modules/Setting/pages/SettingsPage/SettingsPage')
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Book/pages/BookListPage/BookListPage').default)
        })
      }}
    />
    <Route
      path="login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/LoginPage/LoginPage').default)
        });
      }}
    />
    <Route
      path="dashboard"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Dashboard/pages/DashboardPage/DashboardPage').default)
        });
      }}
    />
    <Route
      path="settings"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Setting/pages/SettingsPage/SettingsPage').default)
        });
      }}
    />
  </Route>
);
