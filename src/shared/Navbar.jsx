import "animate.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-stone-500 font-semibold" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-stone-500 font-semibold" : "text-black"
        }
      >
        About Me
      </NavLink>

      <NavLink
        to="/allProject"
        className={({ isActive }) =>
          isActive ? "text-stone-500 font-semibold" : "text-black"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-stone-500 font-semibold" : "text-black"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#F2F2F2] shadow-md px-5 md:px-10 py-5 fixed top-0 z-50 backdrop-blur-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <h1
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-xl font-bold text-gray-600 animate__animated animate__fadeIn animate__infinite animate__slower"
            >
              ISTIAQ
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://drive.google.com/file/d/15a1PtMzncJMgbcGb-nhWd_3_VctSQFGm/view?usp=drive_link"
            className="btn btn-lg px-3 py-2 text-stone-500 bg-base-300 shadow-md border border-gray-300 hover:bg-gray-500 hover:text-white"
          >
            Get Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
