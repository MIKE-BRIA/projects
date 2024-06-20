// import { useEffect, useState } from "react";
// import axios from "axios";
// import CardHouse from "../components/client/CardHouse";

// const Home = () => {
//   const [houses, setHouses] = useState([]);
//   useEffect(() => {
//     async function fetchHouseData() {
//       const response = await axios("http://localhost:3000/houses");
//       console.log(response.data);

//       // const fetchedHouseData = response.data;
//       setHouses(response.data);
//     }

//     fetchHouseData();
//   }, []);
//   return (
//     <>
//       <main className="container mx-auto px-4 py-8">
//         {houses.length === 0 ? (
//           <p>No houses found.</p>
//         ) : (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {houses.map((house) => (
//               <li key={house._id}>
//                 <CardHouse housedata={house} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </main>
//     </>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import axios from "axios";
import CardHouse from "../components/client/CardHouse";

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function fetchHouseData() {
      try {
        const response = await axios.get("http://localhost:3000/houses");
        console.log(response.data.houses);

        setHouses(response.data.houses);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    }

    fetchHouseData();
  }, []);

  // Render loading state or error message while data is fetching or if houses is still undefined
  if (houses === null) {
    return <p>Loading...</p>;
  }

  return (
    <main className="container mx-auto px-1 py-8">
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
    </main>
  );
};

export default Home;
