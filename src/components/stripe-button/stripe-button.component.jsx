import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51GrlKXDbldqZn04ZDL9RG7jZC6woILcZz2yPHXeiOSDJzqSBSR4dYKc7uyH5h8WlIyYoZxsFGeOyUPdbVixU3iS600mzLQshVt';

  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing ltd."
      description={`Your total is ${price}$`}
      image="https://svgshare.com/i/CUz.svg"
      shippingAddress
      billingAddress
      amout={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
