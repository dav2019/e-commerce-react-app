import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { ReactComponent as Logo } from '../../assets/dd.svg'

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'


const Navigation = () => {
    // const { currentUser } = useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    console.log('is cart open', isCartOpen)
    
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            {/* <Logo className="logo" /> */}
            <h2>CUSTOM PC</h2>
          </LogoContainer> 
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? (
                <NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>)
                : ( <NavLink to='/auth'> SIGN IN </NavLink> )
            }
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;