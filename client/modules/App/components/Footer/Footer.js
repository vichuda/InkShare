import React from 'react'
import { grey900 } from 'material-ui/styles/colors'

// Import Style
import styles from './Footer.css'

export function Footer() {
  return (
    <div style={{ background: grey900 }} className={styles.footer}>
      <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
    </div>
  );
}

export default Footer;
