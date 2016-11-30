import React from 'react'
import { grey900 } from 'material-ui/styles/colors'

import styles from './Footer.css'

export function Footer() {
  return (
    <div className={styles.footer} style={{ background: grey900 }}>
      <p>Made by <a href="http://caleb272.github.io/portfolio/" target="_blank">Caleb Martin</a> &middot; 2016</p>
    </div>
  );
}

export default Footer;
