import React from "react";
import StripeCheckoutButton from "../../components/stripe-checkout/stripe-checkout.component";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "./../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-items/checkout-item.component";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Rate</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">Total ${totalPrice}</div>
    <div className="test-card">
      Please use the following test cards for Payment*
      <br />
      4242 4242 4242 4242 Exp:02/22 CVV:123
      <br />
      <br />
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
export default connect(mapStateToProps)(Checkout);
