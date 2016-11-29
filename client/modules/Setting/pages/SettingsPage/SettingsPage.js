import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { getUser } from '../../../User/UserReducer'
import { requestUpdateShippingInfo } from '../../../User/UserActions'

// const styles = {
//   maxWidth: '980px',
//   padding: '15px',
//   margin: '0 auto',
//   width: '100%'
// }
import styles from '../../../App/App.css'
console.log(styles)

class SettingsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: (props.user.fullName || ''),
      shippingAddress: (props.user.shippingAddress || '')
    }

    this.updateUserProfileClicked = this.updateUserProfileClicked.bind(this)
    this.fullNameFieldChanged = this.fullNameFieldChanged.bind(this)
    this.shippingAddressFieldChanged = this.shippingAddressFieldChanged.bind(this)
  }


  updateUserProfileClicked() {
    this.props.dispatch(
        requestUpdateShippingInfo(this.state.fullName, this.state.shippingAddress))
  }


  fullNameFieldChanged(e) {
    this.setState({ fullName: e.target.value })
  }


  shippingAddressFieldChanged(e) {
    this.setState({ shippingAddress: e.target.value })
  }


  render() {
    return (
      <div className={styles.container}>
        <TextField
          floatingLabelText="Full Name"
          fullWidth={Boolean(true)}
          value={this.state.fullName}
          onChange={this.fullNameFieldChanged}
        />
        <TextField
          floatingLabelText="Shipping Address"
          fullWidth={Boolean(true)}
          value={this.state.shippingAddress}
          onChange={this.shippingAddressFieldChanged}
        />
        <FlatButton
          label="Update User Profile"
          primary={Boolean(true)}
          style={{ float: 'right' }}
          onClick={this.updateUserProfileClicked}
        />
      </div>
    )
  }
}

SettingsPage.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(SettingsPage)
