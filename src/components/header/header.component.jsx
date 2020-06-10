import React from 'react';

import { createStructuredSelector } from 'reselect';

import {
  HeaderContaier,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContaier>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contacts">Contacts</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContaier>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
