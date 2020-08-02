import React, { useState } from "react";
import "./Dropdown_profile.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ShopIcon from "@material-ui/icons/Shop";
import FavoriteIcon from "@material-ui/icons/Favorite";

function DropdownProfile({ visibility }) {
  return (
    <div className={`profile_dropdown ${visibility ? "" : "visibility"}`}>
      <ul className="dropdown_list">
        <li className="list_item">
          <AccountCircleIcon fontSize="small" className="list_icon" />
          <span>My Profile</span>
        </li>
        <li className="list_item">
          <OfflineBoltIcon fontSize="small" className="list_icon" />
          <span>SuperCoin Zone</span>
        </li>
        <li className="list_item">
          <LocalHospitalIcon fontSize="small" className="list_icon" />
          <span>FlipkartPlus Zone</span>
        </li>
        <li className="list_item">
          <ShopIcon fontSize="small" className="list_icon" />
          <span>Orders</span>
        </li>
        <li className="list_item">
          <FavoriteIcon fontSize="small" className="list_icon" />
          <span>Wishlist</span>
        </li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
