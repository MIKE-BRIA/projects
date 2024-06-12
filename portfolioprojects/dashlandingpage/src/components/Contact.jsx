const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-100 max-w-large m-auto py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border-gray-300 rounded-md py-2 px-4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Email:</strong> dashboo@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Oxford Street, London, United
              Kingdom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
