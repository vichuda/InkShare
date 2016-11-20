import React, { PropTypes, Component } from 'react'
import TextField from 'material-ui/TextField'
import * as loginTools from '../tools/LoginTools'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      'validate-password': ''
    }

    this.handleFormKeyPressed = this.handleFormKeyPressed.bind(this)
  }


  handleFormKeyPressed(e) {
    const username = this.state.username
    const password = this.state.password
    if (loginTools.isValidEnterKey(e, username, password)) {
      if (this.doPasswordsMatch()) {
        this.props.login(username, password)
      } else if (this.props.toggleSnackBar) {
        this.props.toggleSnackBar('the passwords don\'t match')
      }
    } else {
      this.props.toggleSnackBar('you need to fill out all of the fields')
    }
  }


  doPasswordsMatch() {
    if (this.props.signupToggled
        && this.state.password !== this.state['validate-password']) {
      return false
    }
    return true
  }


  signupInput() {
    return (
      <TextField
        floatingLabelText="Confirm Password"
        fullWidth={Boolean(true)}
        value={this.state['validate-password']}
        name="validate-password"
        onChange={loginTools.handleFieldChange.bind(this)}
        type="password"
      />
    )
  }


  render() {
    return (
      <form onKeyPress={this.handleFormKeyPressed}>
        <TextField
          floatingLabelText="Username"
          fullWidth={Boolean(true)}
          value={this.state.username}
          name="username"
          onChange={loginTools.handleFieldChange.bind(this)}
          autoComplete="false"
        />
        <TextField
          floatingLabelText="Password"
          fullWidth={Boolean(true)}
          value={this.state.password}
          name="password"
          onChange={loginTools.handleFieldChange.bind(this)}
          type="password"
        />
        {this.props.signupToggled ? this.signupInput() : null}
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  signupToggled: PropTypes.bool,
  toggleSnackBar: PropTypes.func
}

export default LoginForm
