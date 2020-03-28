import React from 'react';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ totalQuantity, toggleCartHidden }) => {
  console.log('rerender');
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    totalQuantity: selectCartItemsCount(state)
  };
};
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
