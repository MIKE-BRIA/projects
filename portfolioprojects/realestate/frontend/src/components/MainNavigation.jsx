import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <main className="bg-slate-200 p-4 ">
        <section className="flex justify-between">
          <div>
            <Link to="/">
              <h1>Boomuh</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search by city of choice"
              name=""
              id=""
              className="text-lg p-1 rounded-l-lg text-center border-none"
            />
            <button className="bg-red-300 h-full flex items-center p-1 w-10 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-8 items-center">
            <nav className="flex gap-8">
              <Link to="buy">Buy</Link>
              <Link to="rent">Rent</Link>
              <Link>Saved Homes</Link>
              <Link to="admin">Admin</Link>
            </nav>
            <button className="border border-gray-300 shadow-md p-1 rounded-lg">
              <NavLink to="/login">login</NavLink>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nav;
