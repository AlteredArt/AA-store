import React from 'react';
// import './header.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/contact">Contact</OptionLink>

            {
                currentUser ? 
                (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
                : 
                (<OptionLink className="option" to="/signin">SIGN IN</OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);