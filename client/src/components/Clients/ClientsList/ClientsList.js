import React, { useState } from "react";

import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Alert, AlertTitle, Avatar, Snackbar, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd/lib";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";

const userController = new User();

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export function ClientL(props) {
  const { accessToken } = useAuth();
  const { users, onReload } = props;
  const [open, setOpen] = useState(false);
  let rowss = [];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function MySnackbar() {
    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity="success">
          Engineer successfully deleted!
        </Alert>
      </Snackbar>
    );
  }

  function deleteconfirm(id, accessToken) {
    const confirm = async (e) => {
      console.log(e);
      try {
        await userController.deleteUser(accessToken, id);
        onReload();
        handleOpen();
      } catch (error) {
        console.error(error);
      }
    };
    return confirm;
  }

  const cancel = (e) => {
    console.log(e);
  };

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

    { field: "statecity", headerName: "State/City", width: 130 },
    {
      field: "action",
      headerName: "Action",
      with: 400,
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
            <Popconfirm
              title="Delete the enginner"
              description="Are you sure to delete this engineer?"
              onConfirm={deleteconfirm(params.row.id, accessToken)}
              onCancel={cancel}
              okText="Yes, delete"
              cancelText="No, cancel"
            >
              <Tooltip title="Delet">
                <DeleteIcon className="userListDelet" />
              </Tooltip>
            </Popconfirm>
          </>
        );
      },
    },
  ];

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
    rowss.push(rt);
  });

  console.log("este");
  console.log(users);
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rowss}
        disableSelectionOnClick
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        columnVisibilityModel={{
          // Hide columns status and traderName, the other columns will remain visible
          id: false,
        }}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <MySnackbar />
    </div>
  );
}
