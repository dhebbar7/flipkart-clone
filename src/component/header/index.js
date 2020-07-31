import React from "react";
import logo from "../../assets/images/flipkart-plus-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      {/* flipkart logo */}
      <div className="header__logo_section">
        <img
          width="75"
          src={logo}
          alt="flipkart-logo"
          className="header__logo"
        />
        <a href="" className="explore">
          Explore
          <span className="plus">Plus</span>
          <img
            width="10"
            placeholder="Search for products, brands and more"
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
            alt=""
          />
        </a>
      </div>
      <div className="header_search">
        <input
          type="text"
          className="search"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__links">
          Dinesh
          <ExpandMore className="expand_icon"></ExpandMore>
        </div>
        <div className="header__links">
          More
          <ExpandMore className="expand_icon"></ExpandMore>
        </div>
        <Link className="cart_section">
          <ShoppingCartIcon></ShoppingCartIcon>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Header;
