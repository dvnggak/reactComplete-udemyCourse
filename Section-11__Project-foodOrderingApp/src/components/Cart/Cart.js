import React, { useContext } from "react";
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

import classes from './Cart.module.css'

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`;

    //CHECK WHETER THE CART HAS AN ITEM
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {

    };

    const cartAddItemHandler = (item) => {

    }

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartContext.items.map((cartItem) => (
                <CartItem 
                    key={cartItem.id} 
                    name={cartItem.name}
                    amount={cartItem.amount}
                    price={cartItem.price}
                    onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
                    onAdd={cartAddItemHandler.bind(null, cartItem)}
                />
            ))
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