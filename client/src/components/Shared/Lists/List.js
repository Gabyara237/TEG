import React, { useState, useEffect } from "react";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";
import { EngineerL } from "../../Engineers/EngineersList/EngineersList";
import { Loader } from "semantic-ui-react";
import { ClientL } from "../../Clients/ClientsList/ClientsList";

const userController = new User();

export function List(props) {
  const { reload, role, onReload } = props;
  const [users, setUsers] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getEngineers(accessToken, role);
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!users) return <Loader active inline="centered" />;
  if (role === "engineer") {
    return <EngineerL users={users} onReload={onReload} />;
  } else if (role === "client") {
    return <ClientL users={users} onReload={onReload} />;
  }
}
