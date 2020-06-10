import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartItemContainer,
  CartItemCount,
  CartShoppingIcon,
} from './cart-icon.styles.jsx';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartItemContainer onClick={toggleCartHidden}>
    <CartShoppingIcon className="shopping-icon" />
    <CartItemCount>{itemCount}</CartItemCount>
  </CartItemContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
