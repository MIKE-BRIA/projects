import PropTypes from "prop-types";

const PriceArticle = ({ plan, price, features }) => {
  return (
    <>
      <div className="bg-white shadow-md mt-8 rounded-lg p-4 w-full md:w-52 my-4">
        <article>
          <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
          <p className="text-4xl font-bold mb-4">${price}</p>
          <ul className="mb-4">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-lg bottom-0">
            Choose {plan}
          </button>
        </article>
      </div>
    </>
  );
};

PriceArticle.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PriceArticle;
