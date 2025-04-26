import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

function Navber() {
  const { signOutUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate(`/signIn`);
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="py-4 navbar px-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg">
      {/* Left Side */}
      <div className="navbar-start">
        {user && (        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-white"
            aria-label="menu"
          >
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
         <li>
         <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-blue-500 font-bold"
        >
        Chatbubble
        </Link>
          </li> 
          </ul>
        </div>)}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-blue-500 font-bold"
        >
          Postify
        </Link>
      </div>

      {/* Center: Navbar Links */}
      <div className="navbar-center hidden lg:flex">

      </div>

      {/* Right Side */}
      <div className="navbar-end">
      <div className="flex flex-col items-center space-y-4 mx-4">
              {/* Profile Picture */}
              <div /> 
              {user && (
                  user?.photoURL? <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full" /> : <img src="https://chatgpt.com.br/wp-content/uploads/2023/03/bing-image-creator-1024x1024.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
                )}


              {/* User Details */}
              {/* <div className="text-center">
                <p className="text-lg text-gray-800">
                  <strong>Name:</strong> {user.displayName || "N/A"}
                </p>
                <p className="text-lg text-gray-800">
                  <strong>Email:</strong> {user.email || "N/A"}
                </p>
              </div> */}
            </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gray-700 hover:bg-gray-600 text-blue-400 font-semibold border border-gray-500"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/"
            className="btn bg-blue-600 hover:bg-blue-500 text-white font-semibold border-none"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navber;
