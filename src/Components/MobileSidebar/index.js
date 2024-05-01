import React, { useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import {
  Home,
  CalendarMonthOutlined,
  Search,
  People,
  Settings,
  MenuBook,
} from "@mui/icons-material";
import "./index.css";

function NavbarSm() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-navbar">
      <div className="logo-image">A</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <MenuBook style={{ Margin: "20px" }} />
      </div>
      {menuOpen && (
        <div className="menu-items">
          <Menu>
            <MenuItem icon={<Home />}>Home</MenuItem>
            <MenuItem icon={<Search />}>Search</MenuItem>

            <MenuItem icon={<People />}>Teams</MenuItem>

            <MenuItem icon={<CalendarMonthOutlined />}>Calendar</MenuItem>
            <MenuItem icon={<Settings />}>Settings</MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default NavbarSm;
