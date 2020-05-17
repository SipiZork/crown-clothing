import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-family: 'Open Sans Condensed';
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;
`

export const OptionsContainer = styled.div`
  width: 280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  padding: 15px;
  cursor: pointer;
`