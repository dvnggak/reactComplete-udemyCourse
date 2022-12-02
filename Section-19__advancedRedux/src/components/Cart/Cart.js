<<<<<<< HEAD
=======
import { useSelector } from 'react-redux';
>>>>>>> section19-advancedRedux
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
<<<<<<< HEAD
=======

  const cartItems = useSelector((state) => state.cart.items)

>>>>>>> section19-advancedRedux
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
<<<<<<< HEAD
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
=======
        {
          cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={
                  { 
                    id: item.id,
                    title: item.name, 
                    quantity: item.quantity, 
                    total: item.totalPrice, 
                    price: item.price 
                  }
                }
              />
            )
          )
        }
>>>>>>> section19-advancedRedux
      </ul>
    </Card>
  );
};

export default Cart;
