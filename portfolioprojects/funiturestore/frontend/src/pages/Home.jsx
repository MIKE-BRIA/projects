import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/images/housebadge.jpg"
          className="w-full object-cover"
          alt="House Badge"
          style={{ height: "500px" }}
        />
        <div className="absolute top-28 right-28 w-96 m-4 p-4 bg-white bg-opacity-80 rounded shadow-lg">
          <p className="font-mono">NEW ARRIVAL</p>
          <h1 className="my-3">Discover our New Collection</h1>
          <p className="my-3 text-lg font-medium">
            Do shopping for your house furniture and if you are not able to
            style your home we are willing to be your interior designers
          </p>
          <Link to="/shop">
            <button className="btn-primary">Shop with us</button>
          </Link>
        </div>
      </div>
      <p>Home</p>
    </>
  );
};

export default Home;
