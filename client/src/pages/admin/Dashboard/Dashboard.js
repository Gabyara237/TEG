import React from "react";
import {
  FeaturedInfo,
  WidgetSm,
  WidgetLg,
  SummaryCountries,
  TicketsTable,
} from "../../../components/DashboardAdmin";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <div>
      <FeaturedInfo />
      <SummaryCountries />
      <div className="dashboardWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <TicketsTable />
    </div>
  );
}
