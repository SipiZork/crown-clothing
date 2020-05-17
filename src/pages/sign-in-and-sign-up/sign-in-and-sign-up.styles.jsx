import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

@media screen and (max-width: 920px) {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
}
`