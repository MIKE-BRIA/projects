import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between rounded-lg bg-slate-300 p-4 max-w-large m-auto">
        <div className="flex gap-1 items-center">
          <div className="block md:hidden">
            <button
              onClick={togglemenu}
              className="relative flex flex-col items-center justify-center w-10 h-10"
            >
              <span className="block w-8 h-1 bg-black mb-1 transform transition duration-300"></span>
              <span className="block w-8 h-1 bg-black mb-1 transform transition duration-300"></span>
              <span className="block w-8 h-1 bg-black transform transition duration-300"></span>
            </button>
          </div>
          <h2 className="text-lg  font-semibold">DashBoo</h2>
        </div>
        <div className="gap-7 hidden md:flex cursor-pointer">
          <Link to="demo" smooth={true}>
            Demo
          </Link>
          <Link to="testimonials" smooth={true}>
            Testimonials
          </Link>
          <Link to="pricing" smooth={true}>
            Pricing
          </Link>
          <Link to="support" smooth={true}>
            Support
          </Link>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
        <div>
          <button className="bg-blue-600 px-2 py-1 text-white rounded-lg  hover:bg-blue-900">
            Get started
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed cursor-pointer inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button
            onClick={togglemenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <Link
            onClick={togglemenu}
            to="demo"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Demo
          </Link>
          <Link
            onClick={togglemenu}
            to="testimonials"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Testimonials
          </Link>
          <Link
            onClick={togglemenu}
            to="pricing"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Pricing
          </Link>
          <Link
            onClick={togglemenu}
            to="support"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Support
          </Link>
          <Link
            onClick={togglemenu}
            to="contact"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
