import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.style.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';

import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go To Check OUt
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
