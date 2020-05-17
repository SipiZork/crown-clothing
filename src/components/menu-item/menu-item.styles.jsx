import styled from 'styled-components';

const height = props => {
  if (props.size === 'large') {
    return '380px'
  } else if (props.size === 'nromal') {
    return '240px'
  }
  return '100px';
}

export const MenuItemContainer = styled.div`
	height: ${height};
	flex-basis: 30%;
  min-width: 230px;
  min-height: 15rem;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 0.063rem solid black;
  margin: 0 0.469rem 0.938rem;
  overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`