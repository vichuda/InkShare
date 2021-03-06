import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

// Import Style
import styles from './App.css'

// Import Components
import Helmet from 'react-helmet'
import DevTools from './components/DevTools'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { getUserRequest, requestLogout } from '../User/UserActions'
import { getUser } from '../User/UserReducer'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };

    this.logout = this.logout.bind(this)
  }


  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.props.dispatch(getUserRequest())
  }


  logout() {
    this.props.dispatch(requestLogout())
  }


  // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
  // <div style={{ backgroundColor: grey700 }}>
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={styles}>
          <Helmet
            title="Ink Share"
            titleTemplate="%s - Book Sharing Made Easy"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          <div id="content-container">
            <Header
              user={this.props.user}
              logout={this.logout}
            />
            <div className={styles['content-container']}>
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: getUser(store)
  }
}

export default connect(mapStateToProps)(App)
