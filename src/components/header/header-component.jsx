import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from './../../assets/crwn.svg';
import { auth } from './../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        {currentUser ? (
          <div>
            <Link className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </Link>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
