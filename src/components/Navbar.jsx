import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
    const navLinks = (
      <>
        <li>
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive
                ? "text-rose-400 font-semibold text-lg"
                : "text-slate-300 font-normal text-lg"
            }
          >
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/login"
            className={({isActive}) =>
              isActive
                ? "text-rose-400 font-semibold text-lg"
                : "text-slate-300 font-normal text-lg"
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/register"
            className={({isActive}) =>
              isActive
                ? "text-rose-400 font-semibold text-lg"
                : "text-slate-300 font-normal text-lg"
            }
          >
            Register
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/order"
            className={({isActive}) =>
              isActive
                ? "text-rose-400 font-semibold text-lg"
                : "text-slate-300 font-normal text-lg"
            }
          >
            Order
          </NavLink>
        </li>
      </>
    );


       const handleSignOut = () => {
         logOut()
           .then(() => console.log("done"))
           .catch((error) => console.log(error.message));
       };
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="navbar w-full max-w-[1170px] mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a href="/" className="text-2xl md:text-3xl text-rose-400 font-bold">
            SimpleAuth
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 items-center px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>{user.email}</p>
              <button
                onClick={handleSignOut}
                className="py-3 px-6 ml-3 bg-rose-400 rounded-lg text-white font-medium"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to='/login' className="py-3 px-6 ml-3 bg-rose-400 rounded-lg text-white font-medium">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar