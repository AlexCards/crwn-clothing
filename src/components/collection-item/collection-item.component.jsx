import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  BackgroundImage,
  FooterContainer,
  Name,
  Price,
  CollectionItemCustomButton,
} from './collection-item.styles.jsx';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ addItem, item }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <FooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FooterContainer>
      <CollectionItemCustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CollectionItemCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
