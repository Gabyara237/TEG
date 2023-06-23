import React, { useState } from "react";
import { BasicModal } from "../../../components/Shared";
import { FeaturedInfo, EngineersList } from "../../../components/Engineers";
import { List } from "../../../components/Shared/Lists";
import { FormCreateEngineer } from "../../../components/Engineers/EditEngineer/FormCreateEngineer/FormCreateEngineer";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import "./Engineers.scss";

export function Engineers() {
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
        title="Create new engineer"
      >
        <FormCreateEngineer close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
      <FeaturedInfo />
      <div>
        <h3 className="summaryCountriesTitle"> New engineers </h3>
      </div>

      <List reload={reload} role="engineer" onReload={onReload} />
    </div>
  );
}
