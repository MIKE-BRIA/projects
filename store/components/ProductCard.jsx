import Image from "next/image";
import Link from "next/link";
import sourceImage from "/public/images/image1.avif";

export default function ProductCard({ product }) {
  return (
    <>
      <Link href={"/" + product._id}>
        <article
          key={product._id} // Ensure each product has a unique key
          className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden w-52 hover:shadow-xl transition m-2"
        >
          <div className="w-full">
            <Image
              src={product.images[0]}
              width={400} // Specify the width of the image
              height={300}
              alt={product.title}
              className="w-full h-60 object-cover p-1 rounded-lg"
              fallbackSrc={sourceImage}
            />
          </div>
          <div className="p-2">
            <h1 className="text-lg mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">Price: ${product.price}</p>
          </div>
          {/* <div className="mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Add To Cart
            </button>
          </div> */}
        </article>
      </Link>
    </>
  );
}
