import React from 'react';

import { connect } from 'react-redux';
import { addItemToCard } from '../../redux/cart/cartActions';

import CustomButton from '../custom-button/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItemToCard }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ background: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span>{name.toUpperCase()}</span>
        <span>${price}</span>
      </div>
      <CustomButton onClick={() => addItemToCard(item)} inverted>
        Add to Card
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCard: item => dispatch(addItemToCard(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
