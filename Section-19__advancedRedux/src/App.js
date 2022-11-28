import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true

function App() {

  const showCart = useSelector( (state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Pending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch(
        'https://react-http-92073-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        });

        if (!response.ok) {
          throw new Error('Failed sending cart data')
        }

        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sending cart data successfully'
        }))
    }
    
    if(isInitial) {
      isInitial = false
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sending cart data Failed!'
      }))
    })
  },[cart, dispatch])

  return (
    <Fragment>
      {
        notification 
          ? <Notification 
              status={notification.status} 
              title={notification.title} 
              message={notification.message}
            />
          : null
      }
      <Layout>
        {
          showCart ? <Cart /> : null
        }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
