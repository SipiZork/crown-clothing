import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  let cartItemCounter = 0;
  cartItems.map(cartItem => {
    cartItemCounter += cartItem.quantity
    return null
  })
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItemCounter}
      </span>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)