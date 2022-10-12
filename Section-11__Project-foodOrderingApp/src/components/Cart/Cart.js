import React, { useContext } from "react";
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

import classes from './Cart.module.css'

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`;

    //CHECK WHETER THE CART HAS AN ITEM
    const hasItems = cartContext.items.length > 0

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartContext.items.map(cartItem => <li>{cartItem.name}</li>)
        }
    </ul> 

    return (
        <Modal onBackgroundClick={props.onClickClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClickClose}>Close</button>
                {
                    hasItems && <button className={classes.button}>Order</button>
                }
            </div>
        </Modal>
    )
}

export default Cart;