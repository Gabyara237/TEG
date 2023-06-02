import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import "./breadcrumbs.scss";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export function Pasos() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/admin/engineers"
        >
          <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          <span className="breadcrumbs">Engineer</span>
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <span className="breadcrumbs"> Edit Engineer</span>
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
