import React from 'react';
import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  ItemName,
} from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemName>{name}</ItemName>
      <span className="price">
        {quantity} X {price}$
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
