const Footer = () => {
  return (
    <footer className="bg-gray-600 0 p-4 max-w-large m-auto  flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div>
          <p className="text-lg font-semibold">DashBoo</p>
          <p className="text-sm">123 Oxford Street, London, United Kingdom</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-white font-semibold mb-2">Products</p>
          <ul className="text-sm">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Product 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Product 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Product 3
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-2 text-white">Services</p>
          <ul className="text-sm">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Service 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Service 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Service 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2 text-white">Follow Us</p>
          <div className="flex flex-col space-x-4 ">
            <a href="#" className="text-gray-300 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
