import React, { Fragment } from 'react'

import classes from './Header.module.css'
import mealsBanner from '../../assets/meals.jpg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MaMamYog</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsBanner} alt='Food is love'/>
            </div>
        </Fragment>
    )
}

export default Header