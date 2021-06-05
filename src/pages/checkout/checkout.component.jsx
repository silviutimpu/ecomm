import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Produs</span>
      </div>
      <div className='header-block'>
        <span>Descriere</span>
      </div>
      <div className='header-block'>
        <span>Cantitate</span>
      </div>
      <div className='header-block'>
        <span>Pret</span>
      </div>
      <div className='header-block'>
        <span>Sterge</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: {total} lei</div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
