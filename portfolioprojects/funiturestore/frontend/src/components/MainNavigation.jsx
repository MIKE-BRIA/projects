import { Link } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";

const MainNavigation = () => {
  return (
    <>
      <main>
        <section className="flex justify-between maxWidth-large bg-slate-200 p-5">
          <div>
            <Link to="/" className="flex gap-2">
              <img src="/vite.svg" alt="Furniro Logo" className="w-8 h-8" />
              <h1 className="text-black">Furniro</h1>
            </Link>
          </div>
          <div className="">
            <nav className="space-x-16 text-black text-lg">
              <Link to="/">Home</Link>
              <Link to="shop">Shop</Link>
              <Link>About</Link>
              <Link>Contact</Link>
              <Link to="admin">Admin</Link>
            </nav>
          </div>
          <div className="space-x-6">
            <button>
              <RiAccountPinCircleLine size={24} color="black" />
            </button>
            <button>
              <CiSearch size={24} color="black" />
            </button>
            <button>
              <CiHeart size={24} color="black" />
            </button>
            <button>
              <IoIosCart size={24} color="black" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainNavigation;
