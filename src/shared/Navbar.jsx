import "animate.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-base-content"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-base-content"
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/allProject"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-base-content"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : "text-base-content"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md px-5 md:px-10 py-5 fixed top-0 z-50 backdrop-blur-2xl">
        {/* Navbar Start */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>

          {/* Logo / Name */}
          <h1
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-xl font-bold text-base-content animate__animated animate__fadeIn animate__infinite animate__slower"
          >
            ISTIAQ
          </h1>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{menuItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Dark/Light Toggle
          
          <label className="flex cursor-pointer gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            <input type="checkbox" value="dark" className="toggle theme-controller" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          */}
          {/* Resume Button */}
          <Link to="https://drive.google.com/file/d/15a1PtMzncJMgbcGb-nhWd_3_VctSQFGm/view?usp=drive_link" className="btn btn-lg px-3 py-2 text-stone-500 bg-base-300 shadow-md border border-gray-300 hover:bg-gray-500 hover:text-white" > Get Resume </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
