import React, { useState } from "react";
import { BasicModal } from "../../../components/Shared";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { FormCreateCountry } from "../../../components/Countries/FormCreateCountry";
import { List } from "../../../components/Countries/CountriesList";

export function Country() {
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
        title="Create new Country"
      >
        <FormCreateCountry close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
      {/* <FeaturedInfo /> */}
      <div>
        <h3 className="summaryCountriesTitle"> Countries</h3>
      </div>

      <List reload={reload} role="engineer" onReload={onReload} />
    </div>
  );
}
