import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between rounded-lg mb-2 bg-slate-300 p-4 max-w-large m-auto">
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
          <h2 className="text-lg  font-semibold">Brian Michael</h2>
        </div>
        <div className="gap-7 hidden md:flex cursor-pointer">
          <Link to="about" smooth={true}>
            About
          </Link>
          <Link to="projects" smooth={true}>
            Projects
          </Link>

          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
        <div>
          <a href="mailto:michaelbrian466@gmail.com">
            <button className="bg-blue-600 px-2 py-1 text-white rounded-lg  hover:bg-blue-900">
              Email me
            </button>
          </a>
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
            to="about"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            About
          </Link>
          <Link
            onClick={togglemenu}
            to="projects"
            smooth={true}
            className="text-white text-2xl mb-4"
          >
            Projects
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
