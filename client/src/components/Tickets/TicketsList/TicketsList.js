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
import { Ticket } from "../../../api";
import { useAuth } from "../../../hooks";
import { Tag } from "antd";

const ticketController = new Ticket();

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export function TicketsL(props) {
  const { accessToken } = useAuth();
  const { tickets, onReload } = props;
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
          Ticket successfully deleted!
        </Alert>
      </Snackbar>
    );
  }

  function deleteconfirm(id, accessToken) {
    const confirm = async (e) => {
      try {
        await ticketController.deleteTicket(accessToken, id);
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

  const priority = (ticket) => {
    console.log(ticket);
    console.log(ticket.priority);
    if (ticket.priority === "high") {
      return <Tag color="#851010">High priority</Tag>;
    } else if (ticket.priority === "medium") {
      return <Tag color="#FD800A">Medium priority</Tag>;
    } else {
      return <Tag color="#04AD0C">Low priority</Tag>;
    }
  };

  const status = (ticket) => {
    const statusT = ticket.status;
    switch (statusT) {
      case "open":
        return <Tag color="green">Open</Tag>;
      case "assigned":
        return <Tag color="orange">Assigned</Tag>;
      case "progress":
        return <Tag color="cyan">In Progress</Tag>;
      case "awaiting":
        return <Tag color="purple">Awaiting information</Tag>;
      case "closed":
        return <Tag color="blue">Closed</Tag>;
      default:
        return <Tag color="yellow">High priority</Tag>;
    }
  };

  const columns = [
    { field: "id", headerName: "Ticket number ", width: 120 },
    {
      field: "date",
      headerName: "Creation date",
      width: 120,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "priority",
      headerName: "Priority",
      description:
        "The priority assigned to the ticket, which can be high, medium or low, for example.",
      width: 150,
      renderCell: (params) => {
        const ticket = params.row;
        return priority(ticket);
      },
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 140,
      renderCell: (params) => {
        const ticket = params.row;
        return status(ticket);
      },
    },
    {
      field: "responsible",
      headerName: "Responsible",
      description:
        "The assigned technician responsible for handling the ticket.",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      description:
        "The category or area to which the problem or request belongs, such as networking, software, hardware, etc.",
      width: 150,
    },
    {
      field: "ownerTicket",
      headerName: "Companny",
      description: "The name of the company that submitted the ticket.",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
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
              title="Delete the ticket"
              description="Are you sure to delete this ticket?"
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
  console.log(tickets);
  tickets.forEach((ticket) => {
    let createdDate = new Date(ticket.created_at);
    let formattedDate = createdDate.toLocaleDateString("en-US");

    let rt = {
      id: ticket._id,
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
      date: formattedDate,
      responsible: ticket.responsible,
      categoria: ticket.categoria,
      priority: ticket.priority,
      ownerTicket: ticket.ownerTicket,
      country: ticket.country,
    };
    rowss.push(rt);
  });

  console.log("este");
  console.log(tickets);
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rowss}
        disableSelectionOnClick
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <MySnackbar />
    </div>
  );
}
