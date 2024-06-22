import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../store/slices/houseSlice";
import { selectRentHouses } from "../store/slices/houseSlice";
import { Bars } from "react-loading-icons";
import { useLocation } from "react-router-dom";
import CardHouse from "../components/client/CardHouse";

const RentHousesComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const rentHouses = useSelector(selectRentHouses);
  const status = useSelector((state) => state.houses.status);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [location, dispatch]);

  return (
    <>
      <main className="h-screen">
        <div className="mt-6">
          {status === "loading" && (
            <div className="flex justify-center items-center h-screen">
              <Bars />
            </div>
          )}
          {status === "succeeded" && (
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3">
              {rentHouses.map((house) => (
                <li key={house._id}>
                  <CardHouse housedata={house} />
                </li>
              ))}
            </ul>
          )}
          {status === "failed" && <p>Failed to load houses.</p>}
        </div>
      </main>
    </>
  );
};

export default RentHousesComponent;
