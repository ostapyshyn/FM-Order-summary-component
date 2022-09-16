import React from 'react';
import styles from '../assets/scss/order.module.scss';
import { ReactComponent as Hero } from '../assets/svg/illustration-hero.svg';

function Order() {
  return (
    <main>
      <section>
        <Hero />
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
          you like!
        </p>
        <p>Annual Plan</p>
        <p>$59.99/year</p>
        <a href="#">Change</a>
        <button>Proceed to Payment</button>
        <a href="#">Cancel Order</a>
      </section>
    </main>
  );
}

export default Order;
