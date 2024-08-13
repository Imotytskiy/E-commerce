import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart.png";
// import Shop from "../Pages/Shop";
// import ShopCategory from "../Pages/ShopCategory";
// import Product from "../Pages/Product";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        {/* <p>ForBestKids</p> */}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("boys");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/boys">
            Boys
          </Link>
          {menu === "boys" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("girls");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/girls">
            Girls
          </Link>
          {menu === "girls" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("unisex");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/unisex">
            Unisex
          </Link>
          {menu === "unisex" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
