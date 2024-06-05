import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 80,
    title: "my first product",
    description: "this is my first product and the price is set",
  },
  {
    id: "p2",
    price: 80,
    title: "my second product",
    description: "this is my second product and the price is set",
  },
  {
    id: "p3",
    price: 80,
    title: "my third product",
    description: "this is my third product and the price is set",
  },
  {
    id: "p4",
    price: 80,
    title: "my fourth product",
    description: "this is my fourth product and the price is set",
  },
  {
    id: "p5",
    price: 80,
    title: "my fifth product",
    description: "this is my fifth product and the price is set",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
