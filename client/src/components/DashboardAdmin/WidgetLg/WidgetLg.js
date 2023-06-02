import React from "react";
import "./WidgetLg.scss";

import { Chart } from "../../../components/DashboardAdmin";
import { Userdata } from "../../../../src/dummyData";

export function WidgetLg() {
  return (
    <div className="widgetLg">
      <Chart data={Userdata} title="Analytics" dataKey="Active User" />
    </div>
  );
}
