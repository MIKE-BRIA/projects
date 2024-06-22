import { useEffect } from "react";
import CardHouse from "../components/client/CardHouse";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../store/slices/houseSlice";
import { useLocation } from "react-router-dom";
import { Bars } from "react-loading-icons";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const houseStatus = useSelector((state) => state.houses.status);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch, location]);

  if (houseStatus === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Bars />
      </div>
    );
  }

  return (
    <>
      <main className="h-screen">
        <div className="mt-6">
          {houses.length === 0 ? (
            <p>No houses found.</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3">
              {houses.map((house) => (
                <li key={house._id}>
                  <CardHouse housedata={house} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
