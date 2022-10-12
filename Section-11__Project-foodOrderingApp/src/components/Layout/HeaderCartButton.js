import React, { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsActived, setBtnIsActived] = useState(false)
    
    const cartContext = useContext(CartContext)
    
    const {items} = cartContext
    const cartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)
    
    const btnClasses = `${classes.button} ${btnIsActived ? classes.bump : ''}`

    useEffect(() => {
        if (items.length  === 0) {
            return;
        }
        setBtnIsActived(true)
        const timer = setTimeout(() => {
            setBtnIsActived(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    
    return (
        <button className={btnClasses} onClick={props.onClickCart}>
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