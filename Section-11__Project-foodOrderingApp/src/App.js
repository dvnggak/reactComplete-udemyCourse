import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    return setCartIsShown(true)
  }
  const hideCartHandler = () => {
    return setCartIsShown(false)
  }

  return (
    <Fragment>
      {
        cartIsShown && <Cart onClickClose={hideCartHandler}/>
      }
      <Header onClickCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
