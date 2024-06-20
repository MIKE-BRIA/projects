import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { withSwal } from "react-sweetalert2";

export function AdminHouses({ swal }) {
  const location = useLocation();
  const isAddingNewHouse = location.pathname.endsWith("/new");
  const isEditing = location.pathname.includes("/edit");
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouseData();
  }, []);

  async function fetchHouseData() {
    try {
      const response = await axios.get("http://localhost:3000/houses");
      setHouses(response.data.houses);
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  }

  //*deleting category
  function deleteHouse(house) {
    swal
      .fire({
        title: "Delete House",
        html: `<p>Are you sure you want to delete <strong>${house.title.toUpperCase()}</strong>?</p>`,
        // text: `Are you sure you want to delete ${product.title}?`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete",
        confirmButtonColor: "#d55",
        reverseButtons: true,
        didOpen: () => {},
        didClose: () => {},
      })
      .then(async (result) => {
        const houseId = house._id;
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:3000/houses/${houseId}`);

          fetchHouseData();
        }
      });
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <main>
        {!isAddingNewHouse && !isEditing && (
          <>
            <Link to="/admin/houses/new" className="btn-primary">
              Add new Home/House
            </Link>
            <div className="table-container mt-4">
              <table className="basic">
                <thead>
                  <tr>
                    <th>House Title</th>
                    <th>Location</th>
                    <th>Street</th>
                    <th>Category</th>
                    <th>Created/Updated Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {houses.map((house) => (
                    <tr key={house._id}>
                      <td>{house.title}</td>
                      <td>{house.state}</td>
                      <td>{house.street}</td>
                      <td>{house.category}</td>
                      <td>{formatDate(house.updatedAt)}</td>
                      <td>
                        <Link to={`/admin/houses/edit/${house._id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                          Edit
                        </Link>
                        <button
                          className=" btn-cancel"
                          onClick={() => deleteHouse(house)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <Outlet /> {/* Render Outlet when adding new or editing */}
      </main>
    </>
  );
}

export default withSwal(({ swal }) => {
  return <AdminHouses swal={swal} />;
});
