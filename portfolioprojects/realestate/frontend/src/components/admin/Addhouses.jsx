import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Addhouse() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
    images: [],
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
          images: fetchedHouseData.images || [],
          price: fetchedHouseData.price || "",
          description: fetchedHouseData.description || "",
        });
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    }

    fetchHouseData();
  }, [id]);

  const images = formData.images;

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      try {
        await axios.put(`http://localhost:3000/houses/${id}`, formData);
        navigate("/admin/houses");
      } catch (error) {
        console.error("There was an error updating the house listing!", error);
      }
    } else {
      try {
        await axios.post("http://localhost:3000/houses", formData);

        navigate("/admin/houses");
      } catch (error) {
        if (error.response.data.message) {
          setError(error.response.data.message);
        }
      }
    }
  }

  function handleCancel() {
    navigate("/admin/houses");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //*uploading images
  async function uploadImages(e) {
    const files = e.target?.files;

    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("http://localhost:3000/images", data);

      setFormData.images((oldImages) => {
        return [...oldImages, ...res.data];
      });
    }
  }

  return (
    <>
      {error && (
        <p className="text-red-500 text-xl font-mono bg-blue-100 p-2 text-center mb-4 rounded-xl">
          {error}
        </p>
      )}
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

        {/* image selection */}

        <div className="mb-2 flex  flex-wrap flex-row gap-1">
          {Array.isArray(images) && images.length > 0 ? (
            images.map((link) => (
              <div className="h-24" key={link}>
                <img src={link} alt="" className="rounded-lg h-24" />
              </div>
            ))
          ) : (
            <p className="justify-center">No image selected</p>
          )}

          <label
            htmlFor="image"
            className="w-32 h-32 cursor-pointer border flex flex-col items-center rounded-lg bg-gray-200 justify-center text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Upload</div>
            <input
              id="image"
              name="image"
              type="file"
              onChange={uploadImages}
              className="hidden"
              // accept="png, jpeg"
            />
          </label>
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
          <button type="button" onClick={handleCancel} className="btn-cancel">
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
