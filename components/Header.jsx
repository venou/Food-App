import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  // console.log(loggedInUser);

  // Selector => subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-900 px-6 py-3 shadow-lg">
      <div className="w-20">
        <img className="rounded-xl object-contain" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="flex items-center">
        <ul className="flex items-center space-x-6 text-white font-medium">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-orange-400 transition-colors"
            >
              Grocery
            </Link>
          </li>
          <li>
            <span className="cursor-pointer hover:text-orange-400 transition-colors">
              Cart- ({cartItems.length} items)
            </span>
          </li>
          <button
            className="ml-6 px-5 py-2 rounded-xl bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 active:scale-95 transition"
            onClick={() =>
              setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact}
          </button>
          <li> {loggedInUser} </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
