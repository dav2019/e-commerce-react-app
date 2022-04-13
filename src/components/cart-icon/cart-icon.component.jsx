import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import { Icon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <Icon className='shopping-icon' />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;