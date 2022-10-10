import React from "react";
import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>
        {
            [{
                id: 'c1',
                name: 'Pempek',
                amount: 3,
                price: 15.99,
            }].map(cartItem => <li>{cartItem.name}</li>)
        }
    </ul> 

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>55.87</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;