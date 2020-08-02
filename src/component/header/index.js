import React, { useState } from "react";
import logo from "../../assets/images/flipkart-plus-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import DropdownProfile from "../dropdownProfile";
import "./Header.css";

function Header() {
  const [visibility, setVisibility] = useState(false);
  return (
    <nav className="header">
      <div className="header__empty"></div>
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
          className="search_input"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div className="header__links">
            Dinesh
            <ExpandMore className="expand_icon"></ExpandMore>
            <DropdownProfile visibility={visibility} />
          </div>
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
