import React from "react";
import "./FeaturedInfo.scss";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

export function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Wallet</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 2</span>
            <span className="featuredNumberRate"> 2 + icono</span>
          </div>
        </div>

        <div className="featuredRight">
          <div className="baseicon">
            <MonetizationOnIcon />
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Engineers</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 2</span>
            <span className="featuredNumberRate"> 2 + icono</span>
          </div>
        </div>

        <div className="featuredRight">
          <div className="baseicon">
            <EngineeringIcon />
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Customers</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 2</span>
            <span className="featuredNumberRate"> 2 + icono</span>
          </div>
        </div>

        <div className="featuredRight">
          <div className="baseicon">
            <SupervisedUserCircleIcon />
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Active tickets</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 2</span>
            <span className="featuredNumberRate"> 2 + icono</span>
          </div>
        </div>

        <div className="featuredRight">
          <div className="baseicon">
            <BuildCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
