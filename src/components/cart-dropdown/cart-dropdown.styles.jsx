import styled from 'styled-components'

import CustomButton from '../custom-button/custom-button.components'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: 65px;
  right: 0;
  z-index: 5;
`

export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
`

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`