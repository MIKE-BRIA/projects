import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between rounded-lg bg-slate-300 p-4 max-w-large m-auto">
        <div>
          <h2 className="text-lg font-semibold">DashBoo</h2>
        </div>
        <div className="flex gap-7">
          <Link to="#">Demo</Link>
          <Link to="#">Testimonials</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Support</Link>
          <Link to="#">Contact</Link>
        </div>
        <div>
          <button className="bg-blue-600 px-2 py-1 text-white rounded-lg">
            Get started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
