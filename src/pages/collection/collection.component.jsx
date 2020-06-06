import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      {collection.items.map((el) => el.name)}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
