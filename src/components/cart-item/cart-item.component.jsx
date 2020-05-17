import React from 'react'

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styled'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>{quantity} {quantity === 1 ? 'piece' : 'pieces'} </span>
      <span>${quantity * price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem