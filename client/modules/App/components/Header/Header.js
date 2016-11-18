import React from 'react'
import AppBar from 'material-ui/AppBar'

// Import Style
import styles from './Header.css';

export function Header() {
  return (
    <div className={styles.header}>
      <AppBar title="Ink Share" showMenuIconButton={Boolean(false)} />
    </div>
  )
}

export default Header;
