import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Addhouse() {
  const navigate = useNavigate();
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/houses",
        formData
      );
      console.log(response.data);
      navigate("/admin/houses");
    } catch (error) {
      console.error("There was an error updating the house listing!", error);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* //*title and amenities */}
        <div className="flex">
          <div className="flex flex-col w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Give the house a title"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="amenities">Amenities (comma separated):</label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              value={formData.amenities}
              onChange={handleInputChange}
              placeholder="Amenities the house comes with"
              className="housedata"
            />
          </div>
        </div>
        {/* //*location */}
        <div className="flex">
          <div className="flex flex-col w-full">
            <label htmlFor="country">
              House/Home Location <b>(Country)</b>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country where house is located"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="state">
              House/Home Location <b>(State)</b>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State where house is located"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="street">
              House/Home Location <b>(Address-streets)</b>
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="State where house is located"
              className="housedata"
            />
          </div>
        </div>
        {/* //*bathrooms */}
        <div className="flex">
          <div className="flex flex-col w-full">
            <label htmlFor="bedrooms">Number of Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              placeholder="Number of bedrooms"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="bathrooms">Number of bathrooms</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              placeholder="Number of bathrooms"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="size">Size of the house</label>
            <input
              type="number"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              placeholder="Size of the house in square foot"
              className="housedata"
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col w-full">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="housedata"
            >
              <option value="">Choose Category</option>
              <option value="for sale">for sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="yearBuilt">Year house was build</label>
            <input
              type="number"
              id="yearBuilt"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleInputChange}
              min="1800"
              max="2099"
              step="1"
              placeholder="Year house was built"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="agent">Agent in charge of the house</label>
            <input
              type="text"
              id="agent"
              name="agent"
              value={formData.agent}
              onChange={handleInputChange}
              placeholder="Agent name"
              className="housedata"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="agentemail">Agent email address</label>
            <input
              type="email"
              id="agentemail"
              name="agentemail"
              value={formData.agentemail}
              onChange={handleInputChange}
              placeholder="Agent email address"
              className="housedata"
            />
          </div>
        </div>

        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price in dollars($)"
          className="housedata"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter a Description of the product"
          className="housedata"
        ></textarea>

        <div className="flex gap-3 justify-end">
          <button type="button" className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
