import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { login, setUserProfile } from '../../UserActions'
import { getUserProfile } from '../../UserReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleLoginResponse = this.handleLoginResponse.bind(this)
    this.handleFormKeyPressed = this.handleFormKeyPressed.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }


  handleFieldChange(e) {
    const field = e.target.name
    this.setState({ [field]: e.target.value })
  }


  handleFormKeyPressed(e) {
    const username = this.state.username
    const password = this.state.password
    if (this.isEnterKey(e.key) && this.isValidCredentials(username, password)) {
      this.login(username, password)
    }
  }


  isEnterKey(key) {
    return key === 'Enter'
  }


  isValidCredentials(username, password) {
    return username.length > 0
        && password.length > 0
  }


  login(username, password) {
    login(username, password)
      .then(this.handleLoginResponse)
      .catch(console.error) // eslint-disable-line
  }


  handleLoginResponse(user) {
    if (!user.error) {
      this.props.dispatch(setUserProfile(user))
      this.props.router.goBack()
    } else {
      console.log('login failed') // eslint-disable-line
    }
  }


  render() {
    return (
      <div>
        <h3>LOGIN / SIGN IN</h3>
        <form onKeyPress={this.handleFormKeyPressed}>
          <TextField
            floatingLabelText="Username"
            fullWidth={Boolean(true)}
            value={this.state.username}
            name="username"
            onChange={this.handleFieldChange}
            autoComplete="false"
          />
          <TextField
            floatingLabelText="Password"
            fullWidth={Boolean(true)}
            value={this.state.password}
            name="password"
            onChange={this.handleFieldChange}
            type="password"
          />
        </form>
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
    user: getUserProfile(state)
  }
}

export default connect(mapStateToProps)(withRouter(LoginPage))
