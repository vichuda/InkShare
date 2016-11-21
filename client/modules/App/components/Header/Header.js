import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { browserHistory } from 'react-router'

// Import Style
import styles from './Header.css'

export function Header(props) {
  const loginButton = <FlatButton label="Login" onClick={login} />
  const loggedIn = (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="Dashboard" onClick={dashboard} />
      <MenuItem primaryText="Settings" onClick={settings} />
      <MenuItem primaryText="Logout" onClick={settings} />
    </IconMenu>
  )

  function home() {
    route('/')
  }


  function dashboard() {
    route('/dashboard')
  }


  function settings() {
    route('/settings')
  }


  function login() {
    route('/login')
  }

  function route(url) {
    browserHistory.push(url)
  }


  return (
    <div className={styles.header}>
      <AppBar
        title="Ink Share" showMenuIconButton={Boolean(false)}
        onTitleTouchTap={home}
        iconElementRight={props.user ? loggedIn : loginButton}
      />
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object
}

export default Header;
