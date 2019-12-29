import React from  'react';
import {Link} from 'gatsby'

import styles from './footer.module.scss'

const FooterComponent = () => {
  return(
    <footer className={styles.container}>
      <div className={styles.footerImage}>
        <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/footericon.png"></img>
      </div>

      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="https://www.facebook.com/pastarianashville/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pastariatn">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pastarianashville/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.link}>
        <a href="http://nichefoodgroup.com/">About Niche Food Group</a>
        <Link to='/' >Back To Top</Link>
      </div>
    </footer>
  );
};

export default FooterComponent;