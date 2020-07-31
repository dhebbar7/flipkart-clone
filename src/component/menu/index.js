import React from "react";
import "./Menu.css";
import ExpandMore from "@material-ui/icons/ExpandMore";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__category">
        Electronics <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        TVs & Appliances <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Men <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Women <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Baby & Kids <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Home & Furniture <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Sports, Books & More <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Flights <ExpandMore className="drop_icon" />
      </div>
      <div className="menu__category">
        Offer Zone <ExpandMore className="drop_icon" />
      </div>
    </div>
  );
}

export default Menu;
