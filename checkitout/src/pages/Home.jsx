import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        go to <Link to="products">the list of products</Link>
      </p>
    </>
  );
}
