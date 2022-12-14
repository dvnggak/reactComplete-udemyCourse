<<<<<<< HEAD
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
=======
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch()

  const addItemQuantity = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    )
  }
  const reduceItemQuantity = () => {
    dispatch(
      cartAction.removeItemFromCart(id)
    )
  }
>>>>>>> section19-advancedRedux

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
<<<<<<< HEAD
          <button>-</button>
          <button>+</button>
=======
          <button onClick={reduceItemQuantity}>-</button>
          <button onClick={addItemQuantity}>+</button>
>>>>>>> section19-advancedRedux
        </div>
      </div>
    </li>
  );
};

export default CartItem;
