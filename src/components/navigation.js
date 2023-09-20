import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import {
    ProSidebarProvider,

    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
} from "react-pro-sidebar";

import styled from "styled-components";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #000;
    padding: 15px;
    border-radius: 10px;
  }
`;

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "145vh"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
  );
};
export default SideNavigation;
