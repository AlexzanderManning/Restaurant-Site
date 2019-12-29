import React from "react";
import { Link } from "gatsby";

import styles from './hero.styles.module.scss';

const HeroSection = () => {
  return(
    <div className={styles.parentContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.navMenu}>
          <div className={styles.test}>
            <Link
              to="/"

            >
              <img className={styles.nav__Image} src='https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/logo.png'></img>
            </Link>

            <ul className={styles.nav__list}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#hours">Hours</Link></li>
              <li><Link to="#menus">Menu</Link></li>
              <li><a href="https://www.toasttab.com/pastarianashville/giftcards">Gift Cards</a></li>
              <li> <a href="https://nichefoodgroup.workable.com/">Employment</a></li>
            </ul>
          </div>
          
        </div>

        <div className={styles.headerContainer}>
          <div className={styles.headerPrimary}>
            <h1>Order Online</h1>
          </div>
          <div className={styles.headerSecondary}>
            <h2>8 City BLVD | Nashville, TN 37209</h2>
          </div>
          <div className={styles.headerThird}>
            <h1>615.915.1866 |<span><a href='mailto:events@pastarianashville.com'> Contact</a></span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;