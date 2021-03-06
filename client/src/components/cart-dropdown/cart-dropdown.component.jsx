import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      )) 
      : 
      <span className="empty-message">Coșul este gol</span>
    }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      // close checkout dropdown after click 
      dispatch(toggleCartHidden())
    }}>
      Finalizare cumpărături
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
