import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AdminMenu, AdminMenu2 } from "../../components/AdminLayout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailIcon from "@mui/icons-material/Mail";
import "./AdminLayout.scss";

export function AdminLayout(props) {
  const { children } = props;

  return (
    <div className="admin-layout">
      <div className="admin-layout__left">
        <div className="logo">LOGO</div>
        <AdminMenu />
      </div>
      <div className="admin-layout__right">
        <div className="admin-layout__right-header">
          <div className="wallet">
            <AttachMoneyIcon className="money" /> 0.00
          </div>
          <div className="menu2">
            <div className=" icons">
              <MailIcon className="notifications" />
              <div className="counter">2</div>
            </div>
            <div className=" icons">
              <NotificationsIcon className="notifications" />
              <div className="counter">2</div>
            </div>
            <AdminMenu2 />
          </div>
        </div>
        <div className="admin-layout__right-content">{children}</div>
      </div>
    </div>
  );
}
