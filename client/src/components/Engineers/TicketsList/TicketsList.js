import React from "react";
import "./TicketsList.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "Ticket ID", width: 90 },
  {
    field: "client",
    headerName: "Client",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <Avatar className="userListAvatar" />
          {params.row.client}
        </div>
      );
    },
  },
  { field: "location", headerName: "Location", width: 150 },
  { field: "activity", headerName: "Activity", width: 130 },
  { field: "hoursworked", headerName: "Hours worked", width: 130 },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
  },

  {
    field: "action",
    headerName: "Action",
    with: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"view/" + params.row.id}>
            <Tooltip title="View">
              <VisibilityIcon className="userListView" />
            </Tooltip>
          </Link>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 2,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 3,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 4,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 5,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 6,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 7,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 8,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
  {
    id: 9,
    client: "Jon",
    location: "Lima",
    activity: "Technical Support",
    hoursworked: "4",
    status: "In process ",
  },
];

export function TicketsList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
