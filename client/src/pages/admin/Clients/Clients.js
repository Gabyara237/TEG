import React, { useState } from "react";
import { BasicModal } from "../../../components/Shared";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { List } from "../../../components/Shared/Lists";
import { FormCreateClient } from "../../../components/Clients";

export function Clients() {
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
        title="Create new Client"
      >
        <FormCreateClient close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
      {/* <FeaturedInfo /> */}
      <div>
        <h3 className="summaryCountriesTitle"> Clients</h3>
      </div>

      <List reload={reload} role="client" onReload={onReload} />
    </div>
  );
}
