import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Housedetailcard = () => {
  const [formData, setFormData] = useState({
    title: "",
    amenities: "",
    country: "",
    state: "",
    street: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    category: "",
    yearBuilt: "",
    agent: "",
    agentemail: "",
    price: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchHouseData() {
      try {
        const response = await axios.get(`http://localhost:3000/houses/${id}`);
        const fetchedHouseData = response.data;

        // Set form data with fetched data
        setFormData({
          title: fetchedHouseData.title || "",
          amenities: fetchedHouseData.amenities || "",
          country: fetchedHouseData.country || "",
          state: fetchedHouseData.state || "",
          street: fetchedHouseData.street || "",
          bedrooms: fetchedHouseData.bedrooms || "",
          bathrooms: fetchedHouseData.bathrooms || "",
          size: fetchedHouseData.size || "",
          category: fetchedHouseData.category || "",
          yearBuilt: fetchedHouseData.yearBuilt || "",
          agent: fetchedHouseData.agent || "",
          agentemail: fetchedHouseData.agentemail || "",
          price: fetchedHouseData.price || "",
          description: fetchedHouseData.description || "",
        });
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    }

    fetchHouseData();
  }, [id]);

  const handleContactAgent = () => {
    window.location.href = `mailto:${formData.agentemail}`;
  };

  return (
    <>
      <main>
        <article className="mt-0 md:mt-6  rounded-lg bg-white shadow-lg ">
          <div className="w-6/8 flex flex-col md:flex-row justify-center items-center mx-auto">
            <div className="w-full md:w-2/3 p-3 ">
              <img
                src="/images/copy.jpeg" // Replace with actual image URL
                alt={formData.title}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold mb-2">{formData.title}</h1>
                <h2 className="text-xl text-gray-700 mb-4">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(formData.price)}
                </h2>
                <h3 className="text-lg text-gray-600">
                  {formData.street}, {formData.state}, {formData.country}
                </h3>
                <p className="text-gray-600">
                  <strong>Bedrooms:</strong> {formData.bedrooms}
                </p>
                <p className="text-gray-600">
                  <strong>Bathrooms:</strong> {formData.bathrooms}
                </p>
                <p className="text-gray-600">
                  <strong>Size:</strong> {formData.size} sqft
                </p>
                <p className="text-gray-600">
                  <strong>Category:</strong> {formData.category}
                </p>
                <p className="text-gray-600">
                  <strong>Year Built:</strong> {formData.yearBuilt}
                </p>
                <p className="text-gray-600">
                  <strong>Amenities:</strong> {formData.amenities}
                </p>
                <p className="text-gray-600">
                  <strong>Agent:</strong> {formData.agent}
                </p>
                <p className="text-gray-600">
                  <strong>Agent Email:</strong> {formData.agentemail}
                </p>
                <p className="mt-4 text-gray-800">{formData.description}</p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-xl font-bold mb-2">Talk to Agent</h1>
                {/* Add contact form or agent details here */}
                <div className="flex flex-col">
                  <button className="btn-primary w-full">Request a tour</button>
                  <button
                    className="btn-primary mt-4"
                    onClick={handleContactAgent}
                  >
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Housedetailcard;
