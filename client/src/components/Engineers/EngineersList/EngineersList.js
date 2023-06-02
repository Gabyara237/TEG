import React, { useState, useEffect } from "react";
import "./EngineersList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { EngineerL } from "./l";
import { Loader } from "semantic-ui-react";

const userController = new User();

export function EngineersList() {
  const [users, setUsers] = useState(null);
  const { accessToken } = useAuth();
  console.log(users);

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getEngineers(accessToken);
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!users) return <Loader active inline="centered" />;
  return <EngineerL users={users} />;
}
