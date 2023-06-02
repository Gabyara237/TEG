import React, { useState, useEffect } from "react";
import "./EngineersList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <Avatar className="userListAvatar" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phonee", headerName: "Phone", width: 130 },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
  },

  { field: "country", headerName: "Country", width: 130 },

  { field: "statecity", headerName: "State/City", width: 150 },
  {
    field: "action",
    headerName: "Action",
    with: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"edit/" + params.row.id}>
            <Tooltip title="Edit">
              <EditIcon className="userListEdit" />
            </Tooltip>
          </Link>
          <Link to={"view/" + params.row.id}>
            <Tooltip title="View">
              <VisibilityIcon className="userListView" />
            </Tooltip>
          </Link>
          <Tooltip title="Delete">
            <DeleteIcon className="userListDelet" />
          </Tooltip>
        </>
      );
    },
  },
];
export function EngineerL(props) {
  const { users } = props;
  let row = [];

  users.forEach((user) => {
    let rt = {
      id: user._id,
      userName: user.firstname,
      email: user.email,
      phonee: user.phonenumber,
      status: "active",
      country: user.country,
      statecity: user.city,
    };
    row.push(rt);
  });

  console.log("este");
  console.log(users);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={row}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
