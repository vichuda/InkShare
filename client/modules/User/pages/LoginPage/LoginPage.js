import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { login } from '../../UserActions'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }


  handleFieldChange(field, e) {
    this.setState({ [field]: e.target.value })
  }


  handleFormKeyPressed(e) {
    if (e.key === 'Enter'
        && this.state.username.length > 0
        && this.state.password.length > 0) {
      login(this.state.username, this.state.password)
        .then(response => console.log(response))
    }
  }


  render() {
    return (
      <div>
        <h3>LOGIN / SIGN IN</h3>
        <form onKeyPress={this.handleFormKeyPressed.bind(this)}>
          <TextField
            floatingLabelText="Username"
            fullWidth={Boolean(true)}
            value={this.state.username}
            onChange={this.handleFieldChange.bind(this, 'username')}
          />
          <TextField
            floatingLabelText="Password"
            fullWidth={Boolean(true)}
            value={this.state.password}
            onChange={this.handleFieldChange.bind(this, 'password')}
            type="password"
          />
        </form>
      </div>
    )
  }
}

LoginPage.propTypes = {}

export default LoginPage


// <div>
//   Login
//   <form action="/api/login" method="post">
//     <div>
//       <label>Username:</label>
//       <input type="text" name="username" />
//     </div>
//     <div>
//       <label>Password:</label>
//       <input type="password" name="password" />
//     </div>
//     <div>
//       <input type="submit" value="Log In" />
//     </div>
//   </form>
// </div>
