import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import cart from './assets/cart.svg';
import { useContext } from 'react';



const CartWidget = () => {
    const context = useContext (cartContext)
    
    return (
        <Link to="/cart">
        <div>
            <img src={cart} alt= "cart-widget"/>
            <span> {context.getTotalItemsCart()}</span>
        </div>
        </Link>
    )
}

export default CartWidget;