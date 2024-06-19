export default function Addhouse() {
  return (
    <>
      <form>
        <label htmlFor="">House/Home Location</label>
        <input type="text" placeholder="Product name" className="housedata" />
        <label htmlFor="">Category</label>
        <select>
          <option value="fashion">Choose Category</option>
          <option value="selling">Selling</option>
          <option value="rent">Rent</option>
        </select>
        <label htmlFor="">Price</label>
        <input
          type="text"
          placeholder="Price in dollars($)"
          className="housedata"
        />
        <label htmlFor="">Description</label>
        <textarea placeholder="Enter a Description of the product"></textarea>
        <div className="mb-2 flex  flex-wrap flex-row gap-1">
          {/* {Array.isArray(images) && images.length > 0 ? (
            images.map((link) => (
              <div className="h-24" key={link}>
                <img src={link} alt="" className="rounded-lg h-24" />
              </div>
            ))
          ) : (
            <p className="justify-center">No image selected</p>
          )} */}

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
            <input id="image" name="image" type="file" className="hidden" />
          </label>
        </div>
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
