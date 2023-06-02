import React from "react";
import { Login } from "../../../components/Auth";
import "./Login.scss";

export function LoginCT() {
  return (
    <div className="login">
      <Login />
      <p>© 2022, All rights reserved by Your Connection Point, LLC</p>
    </div>
  );
}
