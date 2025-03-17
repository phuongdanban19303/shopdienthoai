import React, { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setactive] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setactive("home");
    else if (path === "/shop") setactive("shop");
    else if (path === "/cart") setactive("cart");
    else if (path === "/login") setactive("login");
  }, [location]);

  return (
    <div
      className="grid grid-cols-3 gap-4 h-[60px] pt-[20px]"
      style={{ width: "1200px", margin: "0px auto" }}
    >
      <div className="flex gap-3 ">
        <Link
          to="/"
          className={`${active === "home" ? "text-amber-600" : "text-black"} cursor-pointer hover:text-amber-600 transition-colors`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`${active === "shop" ? "text-amber-600" : "text-black"} cursor-pointer hover:text-amber-600 transition-colors`}
        >
          Shop
        </Link>
      </div>
      <div className="text-center ">
        <h6>BOUTIQUE</h6>
      </div>
      <div className="flex gap-3 justify-end ">
        <Link 
          to="/cart" 
          className={`${active === "cart" ? "text-amber-600" : "text-black"} flex items-center gap-1 cursor-pointer hover:text-amber-600 transition-colors`}
        >
          <FaCartArrowDown />
          <span>Cart</span>
        </Link>
        <Link 
          to="/login" 
          className={`${active === "login" ? "text-amber-600" : "text-black"} flex items-center gap-1 cursor-pointer hover:text-amber-600 transition-colors`}
        >
          <IoPersonSharp />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;