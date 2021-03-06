import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 55%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TextContainer = styled.span`
  width: 23%;
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    cursor: pointer;
    user-select: none;
  }

  div {
    margin: 0 10px;
  }
`

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  padding-left: 12px;
`