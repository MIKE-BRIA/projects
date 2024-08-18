import { useEffect, useCallback, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { Link } from "react-router-dom";
// import useGetUserDb from "../hooks/useGetUserDb";

const AdminOrders = () => {
  const showToast = useShowToast();
  const [purchases, setPurchases] = useState([]);
  const [checkedPurchases, setCheckedPurchases] = useState({});
  const [secondCheckedPurchases, setSecondCheckedPurchases] = useState({});
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchPurchases = useCallback(async () => {
    try {
      const res = await fetch("/api/purchases/getPurchases");
      const data = await res.json();
      setPurchases(data.reverse());
    } catch (error) {
      showToast("Error", "Error loading purchase orders", "error");
    }
  }, [showToast]);

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  const handleFirstCheckboxChange = (purchaseId) => {
    setCheckedPurchases((prevState) => ({
      ...prevState,
      [purchaseId]: !prevState[purchaseId],
    }));

    if (!checkedPurchases[purchaseId]) {
      setSecondCheckedPurchases((prevState) => ({
        ...prevState,
        [purchaseId]: false,
      }));
    }
  };

  const handleSecondCheckboxChange = (purchaseId) => {
    setSecondCheckedPurchases((prevState) => ({
      ...prevState,
      [purchaseId]: !prevState[purchaseId],
    }));

    if (!secondCheckedPurchases[purchaseId]) {
      setCheckedPurchases((prevState) => ({
        ...prevState,
        [purchaseId]: false,
      }));
    }
  };

  const filteredPurchases = purchases.filter((purchase) => {
    if (filterStatus === "All") {
      return true;
    } else {
      return purchase.orderStatus === filterStatus;
    }
  });

  return (
    <>
      <div>
        <div className="flex justify-between">
          <div>
            <h1>Orders List</h1>
          </div>
          <div className="mb-4">
            <label htmlFor="statusFilter" className="mr-2 text-lg">
              Filter by status:
            </label>
            <select
              id="statusFilter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border rounded-xl"
            >
              <option value="All">All</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="fulfilled">Fulfilled</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <table className="basic">
            <thead>
              <tr>
                <td>Delivered</td>
                <td>Canceled</td>
                <td>Purchase id</td>
                <td>Date</td>
                <td>Customer name</td>
                <td>Status</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.map((purchase) => {
                return (
                  <tr key={purchase._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={checkedPurchases[purchase._id] || false}
                        onChange={() => handleFirstCheckboxChange(purchase._id)}
                        className="text-blue-500 focus:ring-blue-500"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={secondCheckedPurchases[purchase._id] || false}
                        onChange={() =>
                          handleSecondCheckboxChange(purchase._id)
                        }
                        className="ml-2 bg-red-500 text-red-500 focus:ring-red-500"
                      />
                    </td>
                    <td>
                      <Link to={`${purchase._id}`}>{purchase._id}</Link>
                    </td>
                    <td>
                      {new Date(purchase.purchaseDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td>Brian Micharl</td>
                    <td>{purchase.orderStatus}</td>
                    <td>{purchase.totalAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
