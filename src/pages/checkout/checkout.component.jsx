import React from 'react';

import {
  CheckoutPageContainer,
  HeaderContainer,
  HeaderBlock,
  Total,
  TestWarning,
  CheckoutButton,
} from './checkout.styles.jsx';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ total, cartItems }) => (
  <CheckoutPageContainer>
    <HeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>

      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>

      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>

      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>

      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </HeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      <span>TOTAL: {total}$</span>
    </Total>

    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TestWarning>

    <CheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
