import React from 'react';

import styles from './order-section.module.scss';

const OrderSection = () => {
  return(
    <div id='order' className={styles.orderSection}>

      <div className={styles.mediaObject}>
        <div className={styles.mediaImage}>
          <img src="https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2019/01/postmates_logo_vert_black.png" alt="postmates" />
        </div>
        <div className={styles.mediaBody}>
          <h5 className={styles.mediaHeader}>Delicious food, delivered.</h5>
          <p className={styles.mediaCopy}>
            Your favorite Pastaria dishes are now available on Postmates.
          </p>
          <a className={styles.mediaButton} href="https://postmates.com/merchant/pastaria-nashville">Order Now</a>
        </div>
      </div>

      <div className={styles.mediaObject}>
        <div className={styles.mediaImage}>
          <img src="https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2019/01/toast-logo.png" alt="toast" />
        </div>
        <div className={styles.mediaBody}>
          <h5 className={styles.mediaHeader}>Online ordering now here!</h5>
          <p className={styles.mediaCopy}>
            We’ve teamed up with the folks at Toast to make ordering ahead easy.
          </p>
          <a className={styles.mediaButton} href="https://postmates.com/merchant/pastaria-nashville">Order Now</a>
        </div>
      </div>


    </div>
  );
}

export default OrderSection;