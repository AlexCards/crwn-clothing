import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartDropdownCustomButton,
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>You cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>

    <CartDropdownCustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      Go to checkout
    </CartDropdownCustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
