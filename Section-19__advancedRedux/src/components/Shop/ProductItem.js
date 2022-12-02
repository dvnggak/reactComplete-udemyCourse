<<<<<<< HEAD
=======
import { useDispatch } from 'react-redux';

import { cartAction } from '../../store/cart-slice';
>>>>>>> section19-advancedRedux
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
<<<<<<< HEAD
  const { title, price, description } = props;
=======
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
>>>>>>> section19-advancedRedux

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
<<<<<<< HEAD
          <button>Add to Cart</button>
=======
          <button onClick={addToCartHandler}>Add to Cart</button>
>>>>>>> section19-advancedRedux
        </div>
      </Card>
    </li>
  );
};

<<<<<<< HEAD
export default ProductItem;
=======
export default ProductItem;
>>>>>>> section19-advancedRedux
