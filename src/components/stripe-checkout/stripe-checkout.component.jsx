import StripeCheckout from "react-stripe-checkout";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HT6a7AQtlJRxmQuIDCwsaz6INWWc58CMfnfUEkaoVJfLv9j5ajMOvwkDkva4rvOGRkStFL0ADJrwfmNWsgLWJog00JVad8npc";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Your Payment Is Success");
  };
  return (
    <StripeCheckout
      name="E-Commerce Clothing Ltd."
      label="Pay Now"
      description={`your total is $${price}`}
      amount={priceForStripe}
      billingAddress
      shippingAddress
      image={"https://sendeyo.com/up/d/f3eb2117da"}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
