import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const user = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-head text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoodItems"
          className={({ isActive }) =>
            isActive
              ? "text-head text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          All Food Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-head text-sm md:text-lg font-bold"
              : "text-sm md:text-lg"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-gray-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
            >
              {links}
            </ul>
          </div>
          {/* logo & name */}
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <img className="w-10 md:w-14 lg:w-16" src={logo} alt="logo-img" />
            <Link
              to="/"
              className="text-saffron md:text-3xl lg:text-4xl font-metal font-semibold"
            >
              Flavor Fusion
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            // dropdown icon
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 md:w-14 lg:w-16 rounded-full">
                  {user?.photoURL ? (
                    <img
                      className="text-[10px]"
                      src={user?.photoURL}
                      alt="img-error"
                    />
                  ) : (
                    <img
                      className="text-[10px]"
                      src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                      alt="default"
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
              >
                <>
                  <li>
                    <a>{user?.email}</a>
                  </li>
                  <li>
                    <Link to="/">Add Food Item</Link>
                  </li>
                  <li>
                    <Link to="/">My Added Food Items</Link>
                  </li>
                  <li>
                    <Link to="/">My Ordered Food Items</Link>
                  </li>
                  <li>
                    <Link
                    // onClick={handleLogOut}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              </ul>
            </div>
          ) : (
            <button className="btn-ghost md:text-lg px-4 py-2 rounded-lg">
              <Link to="/">Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
