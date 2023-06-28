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
import { Country } from "../../../api";
import { useAuth } from "../../../hooks";

const countryController = new Country();

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export function CountriesL(props) {
  const { accessToken } = useAuth();
  const { countries, onReload } = props;
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
          Country successfully deleted!
        </Alert>
      </Snackbar>
    );
  }

  function deleteconfirm(id, accessToken) {
    const confirm = async (e) => {
      console.log(e);
      try {
        await countryController.deleteCountry(accessToken, id);
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
      field: "countryname",
      headerName: "Name",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <Avatar className="userListAvatar" />
            {params.row.countryname}
          </div>
        );
      },
    },
    { field: "services", headerName: "Services", width: 150 },
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
  console.log(countries);
  countries.forEach((country) => {
    let rt = {
      id: country._id,
      countryname: country.countryname,
      services: country.services,
      status: "ACTIVE",
    };
    rowss.push(rt);
  });

  console.log("este");
  console.log(countries);
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
