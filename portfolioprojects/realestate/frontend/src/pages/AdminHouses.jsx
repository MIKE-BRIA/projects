// import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminHouses = () => {
  const location = useLocation();
  const isAddingNewHouse = location.pathname.endsWith("/new");
  //   const [products, setProducts] = useState();

  return (
    <>
      {!isAddingNewHouse && (
        <>
          <Link to="new" className="btn-primary">
            Add new Home/House
          </Link>
          <div className="table-container mt-4">
            <table className="basic">
              <thead>
                <tr>
                  <td>House/home Location</td>
                  <td>House/Home Category</td>
                  <td>Created/Updated(Date)</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>{/* Table rows with house data */}</tbody>
            </table>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default AdminHouses;
