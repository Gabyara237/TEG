import React, { useState, useEffect } from "react";
import { Ticket } from "../../../api";
import { useAuth } from "../../../hooks";

import { TicketsL } from "./TicketsList";
import { Loader } from "semantic-ui-react";

const ticketController = new Ticket();

export function List(props) {
  const { reload, role, onReload } = props;
  const [tickets, setTickets] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await ticketController.getTickets(accessToken, role);
        console.log("hola");
        console.log(response);
        setTickets(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!tickets) return <Loader active inline="centered" />;
  return <TicketsL tickets={tickets} onReload={onReload} />;
}
