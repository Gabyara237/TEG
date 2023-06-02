import React from "react";
import {
  ProfileFilled,
  AppstoreFilled,
  FileTextFilled,
  FlagFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import {
  PeopleAlt,
  MiscellaneousServices,
  Business,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function AdminMenu() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Dashboard", "1", <AppstoreFilled style={{ fontSize: "16px" }} />),
    getItem(
      "Clients",
      "2",
      <Business style={{ fontSize: "20px", marginBottom: "-4px" }} />
    ),
    getItem(
      "Engineers",
      "3",
      <PeopleAlt style={{ fontSize: "20px", marginBottom: "-4px" }} />
    ),
    getItem("Countries", "4", <FlagFilled />),
    getItem("Tickets", "5", <ProfileFilled />),
    getItem(
      "Services",
      "6",
      <MiscellaneousServices
        style={{ fontSize: "20px", marginBottom: "-4px" }}
      />
    ),
    getItem("Reports", "7", <FileTextFilled />),
  ];

  const navigate = useNavigate();
  const onClick = (e) => {
    const { key } = e;

    switch (key) {
      case "1":
        navigate("/admin");
        break;
      case "2":
        navigate("/admin/clients");
        break;
      case "3":
        navigate("/admin/engineers");
        break;
      case "4":
        navigate("/admin/countries");
        break;
      case "5":
        navigate("/admin/tickets");
        break;
      case "6":
        navigate("/admin/services");
        break;
      case "7":
        navigate("/admin/reports");
        break;
      default:
        break;
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className="admin-menu"
        onClick={onClick}
        style={{
          maxwidth: 200,
        }}
      />
      <Button
        onClick={toggleCollapsed}
        style={{
          marginBottom: 10,
          marginLeft: 20,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
}
