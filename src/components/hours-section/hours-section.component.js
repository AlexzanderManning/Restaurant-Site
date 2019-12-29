import React from 'react';

import styles from './hours-section.styles.module.scss';

const HoursSection = () => {
  return(
    <div id='hours' className={styles.hoursContainer}>
      <div className={styles.container}>
        <table className={styles.hoursTable}>
          <tbody>
            <tr>
              <td>MON - FRI</td>
              <td>11am - 10pm</td>
            </tr>
            <tr>
              <td>SAT</td>
              <td>10am - 10pm</td>
            </tr>
            <tr>
              <td>SUN</td>
              <td>10am - 9pm</td>
            </tr>
          </tbody>
        </table>

        <p><span className={styles.copy}>Private Dining Avialable. </span><a href='mailto:events@pastarianashville.com'>Email us</a> to get started.</p>

        <p className={styles.copy2}>Free parking in garage.</p>
      </div>

      <div className={styles.noodle}>
      <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/noodle.png" alt="noodle"></img>
      </div>

    </div>

    
  );
}

export default HoursSection;