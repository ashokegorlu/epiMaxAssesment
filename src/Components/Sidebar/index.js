import React, { useState } from "react";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Home,
  CalendarMonthOutlined,
  Search,
  DeskOutlined,
  Settings,
  People,
} from "@mui/icons-material";
import "./index.css";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar collapsed={collapsed} className="navbar">
      <div className="logo-image" onClick={handleToggleSidebar}>
        A
      </div>
      <Menu>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Search />}>Search</MenuItem>

        <MenuItem icon={<People />}>Teams</MenuItem>

        <MenuItem icon={<CalendarMonthOutlined />}>Calender</MenuItem>
        <MenuItem icon={<Settings />} style={{ marginTop: "300px" }}>
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default Navbar;
