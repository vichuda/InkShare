import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { browserHistory } from 'react-router'

// Import Style
import styles from './Header.css';

export function Header(props) {
  const loggedInHeader = <AppBar title="Ink Share" showMenuIconButton={Boolean(false)} />
  const loginHeader = (
    <AppBar
      title="Ink Share" showMenuIconButton={Boolean(false)}
      onTitleTouchTap={home}
      iconElementRight={<FlatButton label="Login" onClick={login} />}
    />
  )


  function home() {
    route('/')
  }


  function login() {
    route('/login')
  }

  function route(url) {
    browserHistory.push(url)
  }


  return (
    <div className={styles.header}>
      {props.user ? loggedInHeader : loginHeader}
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object
}

export default Header;
