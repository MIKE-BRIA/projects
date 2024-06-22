import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const CardHouse = ({ housedata }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const formattedPrice = housedata.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <article className="bg-white border md:border-0 md:rounded-lg md:shadow-md overflow-hidden relative">
      <div className="relative">
        <img
          className="h-64 w-full object-cover"
          src={housedata.image}
          alt="house"
        />
        <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {housedata.category === "for sale" ? "For Sale" : "For Rent"}
        </span>
        <span className="absolute top-0 right-0 p-2">
          <button
            className={`text-xl ${
              isBookmarked ? "text-blue-500" : "text-black"
            }`}
            onClick={toggleBookmark}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </span>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{formattedPrice}</h1>
        <div className="mt-3 flex gap-3">
          <p>{housedata.bedrooms}bd</p>
          <p>{housedata.bathrooms}bths</p>
          <p>{housedata.size}sqft</p>
        </div>
        <p className="text-gray-700">Street: {housedata.street}</p>
        <p className="text-gray-700">State: {housedata.state}</p>
      </div>
    </article>
  );
};

CardHouse.propTypes = {
  housedata: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardHouse;
