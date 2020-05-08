import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
       <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>  
          :
          <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
    </div>
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