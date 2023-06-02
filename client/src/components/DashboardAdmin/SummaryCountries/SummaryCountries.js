import { AddCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import Peru from "../../../assets/png/Peru.png";
import { blueGrey } from "@mui/material/colors";

import "./SummaryCountries.scss";

export function SummaryCountries() {
  return (
    <div className="contentCountry">
      <h3 className=" summaryCountriesTitle"> Summary Countries </h3>
      <div className="countries">
        <div className="country">
          <div className="imgCountryFlag">
            <Avatar alt="Peru Flag" src={Peru} sx={{ width: 80, height: 80 }} />
            <span className="countryname">Peru</span>
          </div>
          <div className="countryInfo">
            <span className="infoItem">Clients: 40</span>
            <span className="infoItem">Engineers: 50</span>
            <span className="infoItem">Active tickets: 12</span>
            <span className="infoItem">Pending tickets: 2</span>
          </div>
        </div>

        <div className="country">
          <div className="imgCountryFlag">
            <Avatar alt="Peru Flag" src={Peru} sx={{ width: 80, height: 80 }} />
            <span className="countryname">Peru</span>
          </div>
          <div className="countryInfo">
            <span className="infoItem">Clients: 40</span>
            <span className="infoItem">Engineers: 50</span>
            <span className="infoItem">Active tickets: 12</span>
            <span className="infoItem">Pending tickets: 2</span>
          </div>
        </div>
        <div className="country">
          <div className="imgCountryFlag">
            <Avatar alt="Peru Flag" src={Peru} sx={{ width: 80, height: 80 }} />
            <span className="countryname">Peru</span>
          </div>
          <div className="countryInfo">
            <span className="infoItem">Clients: 40</span>
            <span className="infoItem">Engineers: 50</span>
            <span className="infoItem">Active tickets: 12</span>
            <span className="infoItem">Pending tickets: 2</span>
          </div>
        </div>
        <AddCircle
          className="addCountry"
          sx={{ color: blueGrey[100], fontSize: 80 }}
        />
      </div>
    </div>
  );
}
