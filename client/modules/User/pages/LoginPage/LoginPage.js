import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SnackBar from 'material-ui/SnackBar'
import { login, setUser } from '../../UserActions'
import { getUser } from '../../UserReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import LoginForm from '../../components/LoginForm'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      snackBarMessage: '',
      showSnackBar: false
    }

    this.login = this.login.bind(this)
    this.signin = this.signin.bind(this)
    this.toggleSnackBar = this.toggleSnackBar.bind(this)
  }


  login(username, password) {
    login(username, password, false)
      .then(this.handleLoginResponse.bind(this))
      .catch(console.error) // eslint-disable-line
  }


  signin(username, password) {
    login(username, password, true)
      .then(this.handleLoginResponse.bind(this))
      .catch(console.error) // eslint-disable-line
  }


  handleLoginResponse({ data: user = null }) {
    if (user) {
      this.props.dispatch(setUser(user))
      this.props.router.goBack()
    } else {
      this.toggleSnackBar('invalid username or password')
    }
  }


  toggleSnackBar(message = null) {
    if (message) {
      this.setState({ snackBarMessage: message })
      this.setState({ showSnackBar: true })
    } else {
      this.setState({ showSnackBar: false })
    }
  }


  /*
    i would have made the tabs part of
      the LoginForm and SignUpForm but
      material-ui is weird and wont work
      like that without some hackery
  */
  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Login">
            <LoginForm
              login={this.login}
              toggleSnackBar={this.toggleSnackBar}
            />
          </Tab>
          <Tab label="Sign Up">
            <LoginForm
              login={this.signin}
              signupToggled={Boolean(true)}
              toggleSnackBar={this.toggleSnackBar}
            />
          </Tab>
        </Tabs>
        <SnackBar
          open={this.state.showSnackBar}
          message={this.state.snackBarMessage}
          autoHideDuration={2000}
          onRequestClose={this.showSnackBar}
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  user: PropTypes.object
}

LoginPage.need = []

function mapStateToProps(state) {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(withRouter(LoginPage))
