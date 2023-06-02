import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import { ReviewEnginner } from "../ReviewEnginner";
import "./ModalAssigne.scss";

export function ModalAssign() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Assign Support Ticket
      </Button>
      <Modal
        title="Unassigned support tickets"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReviewEnginner />
      </Modal>
    </>
  );
}
