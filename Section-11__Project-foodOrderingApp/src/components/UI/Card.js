import React, { Children } from "react";

import classes from './card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card}>  
            {
                props.Children
            }
        </div>
    )
}

export default Card;