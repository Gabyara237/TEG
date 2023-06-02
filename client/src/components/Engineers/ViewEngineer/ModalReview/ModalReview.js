import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import { ReviewEnginner } from "../ReviewEnginner";
import "./ModalReview.scss";

export function ModalReview() {
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
      <Button type="link" onClick={showModal}>
        See all reviews
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReviewEnginner />
      </Modal>
    </>
  );
}
