import styled from 'styled-components'

import CustomButton from '../custom-button/custom-button.components'

export const CollectionItemContainer = styled.div`
  flex-basis: 20vw;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  height: 350px;
  margin: 0 0.469rem 0.469rem 0.469rem;
  align-items: center;
  flex-grow: 1;
  position: relative;

  &:hover {
    .image {
      opacity: .8;
    }

    button {
      display: flex;
    }
  }
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: .85;
  position: absolute;
  bottom: 40px;
  display: none;
`

export const CollectionItemImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`