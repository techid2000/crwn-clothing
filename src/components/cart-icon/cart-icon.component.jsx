import React from 'react';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { getTotalQuantity } from '../../redux/cart/cart.utils';

const CartIcon = ({totalQuantity, toggleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = ({cart: {cartItems}})=> ({
  totalQuantity: getTotalQuantity(cartItems)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
