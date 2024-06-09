import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail page</h1>
      {params.id}
    </>
  );
};

export default ProductDetail;
