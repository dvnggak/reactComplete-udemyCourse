import React, { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext)

    const cartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {cartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton