import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
       <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>  
          :
          <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)

/*loaded ? 
            <Link className="option" to="/signin">SIGN IN</Link>
            : <div className="option loader">
                <div className="loading">
                  <span style={{ '--i': 1 }}></span>
                  <span style={{ '--i': 2 }}></span>
                  <span style={{ '--i': 3 }}></span>
                  <span style={{ '--i': 4 }}></span>
                  <span style={{ '--i': 5 }}></span>
                  <span style={{ '--i': 6 }}></span>
                </div>
            </div>*/