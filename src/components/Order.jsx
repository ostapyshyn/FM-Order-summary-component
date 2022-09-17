import React from 'react';
import styles from '../assets/scss/order.module.scss';
import { ReactComponent as Hero } from '../assets/svg/illustration-hero.svg';
import { ReactComponent as Music } from '../assets/svg/icon-music.svg';

function Order() {
  return (
    <main>
      <section>
        <Hero />
        <article>
          <h1>Order Summary</h1>
          <p className={styles.info}>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </p>
          <div className={styles.plan}>
            <div className={styles.plan_price}>
              <Music />
              <div className={styles.annual_price}>
                <p className={styles.annual}>Annual Plan</p>
                <p className={styles.price}>$59.99/year</p>
              </div>
            </div>

            <a
              className={styles.change}
              href="https://github.com/ostapyshyn/FM-Order-summary-component">
              Change
            </a>
          </div>

          <button>Proceed to Payment</button>
          <a
            className={styles.cancel}
            href="https://github.com/ostapyshyn/FM-Order-summary-component">
            Cancel Order
          </a>
        </article>
      </section>
    </main>
  );
}

export default Order;
