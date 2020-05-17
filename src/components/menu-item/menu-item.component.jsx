import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles'

const MenuItem = ({ title, imgUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem)