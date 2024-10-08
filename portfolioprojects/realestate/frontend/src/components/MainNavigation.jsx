import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await axios.get("http://localhost:3000/session");
        console.log(response.data);
        setUser(response.data.user);
        // setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    }

    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      setUser(null);
      // setIsAdmin(false);
      history.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <main className="bg-slate-200 p-4 ">
        <section className="flex justify-between">
          <div>
            <Link to="/">
              <h1>Boomuh</h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by city of choice"
              name=""
              id=""
              className="text-lg p-2 rounded-lg text-center border-0 border-gray-400 focus:border-blue-500"
            />

            <button className="bg-red-100 h-full flex items-center justify-center p-1 w-10 rounded-lg">
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
              <Link to="/admin">Admin</Link>
            </nav>
            <button className="border border-gray-300 shadow-md p-1 rounded-lg">
              {user ? (
                <>
                  <span>{user.email}</span>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nav;

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import axios from "axios";

// const Nav = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [user, setUser] = useState(null);
//   // const history = useHistory();

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:3000/api/logout");
//       setUser(null);
//       setIsAdmin(false);
//       history.push("/login");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   return (
//     <main className="bg-slate-200 p-4 ">
//       <section className="flex justify-between">
//         <div>
//           <Link to="/">
//             <h1>Boomuh</h1>
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search by city of choice"
//             className="text-lg p-1 rounded-l-lg text-center border-none"
//           />
//           <button className="bg-red-300 h-full flex items-center p-1 w-10 rounded-r-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-8 items-center">
//           <nav className="flex gap-8">
//             <Link to="buy">Buy</Link>
//             <Link to="rent">Rent</Link>
//             <Link>Saved Homes</Link>
//             {isAdmin && <Link to="/admin">Admin</Link>}
//           </nav>
//           <div className="border border-gray-300 shadow-md p-1 rounded-lg">
//             {user ? (
//               <>
//                 <button onClick={handleLogout}>Logout</button>
//               </>
//             ) : (
//               <NavLink to="/login">Login</NavLink>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Nav;
