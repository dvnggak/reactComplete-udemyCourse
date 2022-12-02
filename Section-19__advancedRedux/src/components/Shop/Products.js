import ProductItem from './ProductItem';
import classes from './Products.module.css';

<<<<<<< HEAD
=======
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'My first and favorite ever book to read',
  },
  {
    id: 'p2',
    price: 7,
    title: 'My Second Book',
    description: 'My second book to read',
  },
]

>>>>>>> section19-advancedRedux
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
<<<<<<< HEAD
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
=======
        {
          DUMMY_PRODUCTS.map((product) => 
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )
        }
>>>>>>> section19-advancedRedux
      </ul>
    </section>
  );
};

export default Products;
