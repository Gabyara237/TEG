import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";

export function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };

  return <Button onClick={onLogout}>Logout</Button>;
}
