import React from "react";
import "./WidgetSm.scss";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Visibility } from "@mui/icons-material";

export function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3> New customer registrations</h3>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <SettingsSuggestIcon />
          <div className="widgetSmTicket">
            <span className="widgetSmCustomer">ESP - Chile</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <SettingsSuggestIcon />
          <div className="widgetSmTicket">
            <span className="widgetSmCustomer">ESP - Chile</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <SettingsSuggestIcon />
          <div className="widgetSmTicket">
            <span className="widgetSmCustomer">ESP - Chile</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <span className="seeMore">More</span>
      </ul>
    </div>
  );
}
