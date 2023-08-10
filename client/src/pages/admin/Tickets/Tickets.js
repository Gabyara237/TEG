import React, { useState } from "react";
import { BasicModal } from "../../../components/Shared";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

import { FormCreateTicket } from "../../../components/Tickets/FormCreateTicket";
import { List } from "../../../components/Tickets/TicketsList";

export function Tickets() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  return (
    <div>
      <div className="createEnginner">
        <Button
          variant="contained"
          onClick={onOpenCloseModal}
          startIcon={<Add />}
        >
          Create
        </Button>
      </div>
      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title="Open new Ticket"
      >
        <FormCreateTicket close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
      <div>
        <h3 className="summaryCountriesTitle"> Tickets</h3>
      </div>

      <List reload={reload} role="engineer" onReload={onReload} />
    </div>
  );
}
