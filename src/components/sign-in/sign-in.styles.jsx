import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 920px) {
    margin-bottom: 30px;
    &:after {
      content: '';
      height: 1px;
      width: 150%;
      position: absolute;
      bottom: -25px;
      left: -25%;
      background-color: rgba(134, 134, 134,1);
    }
  }
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`