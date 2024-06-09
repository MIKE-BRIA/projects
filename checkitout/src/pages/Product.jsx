import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "product 1",
  },
  {
    id: "p2",
    title: "product 2",
  },
  {
    id: "p3",
    title: "product 3",
  },
  {
    id: "p4",
    title: "product 4",
  },
  {
    id: "p5",
    title: "product 5",
  },
];

export default function ProductsPage() {
  return (
    <>
      <h1>the products page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
