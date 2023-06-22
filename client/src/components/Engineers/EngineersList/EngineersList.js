import React, { useState, useEffect } from "react";
import "./EngineersList.scss";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { EngineerL } from "./l";
import { Loader } from "semantic-ui-react";

const userController = new User();

export function EngineersList(props) {
  const { reload, close, onReload } = props;
  const [users, setUsers] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getEngineers(accessToken);
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!users) return <Loader active inline="centered" />;
  return <EngineerL users={users} onReload={onReload} />;
}
