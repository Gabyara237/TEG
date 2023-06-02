import { Grid } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import { RegisterTechnician } from "../../../components/Auth/RegisterFormTechnician";
import "./TechnicianSignup.scss";

export function TechnicianSignup() {
  return (
    <>
      <div className="ant-row ant-row-center ant-row-middle px-3 bg-white">
        <RegisterTechnician />
      </div>
    </>
  );
}
