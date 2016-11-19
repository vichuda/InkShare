import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { login, setUser } from '../../UserActions'
import { getUser } from '../../UserReducer'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

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
      .catch(console.error)
  }


  handleLoginResponse(user) {
    if (!user.error) {
      this.props.dispatch(setUser(user))
      browserHistory.push('/')
    } else {
      console.log('login failed')
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
  user: PropTypes.object
}

LoginPage.need = []

function mapStateToProps(state) {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(LoginPage)
