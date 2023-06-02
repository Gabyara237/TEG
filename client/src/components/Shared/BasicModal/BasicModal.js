import React from "react";
import { Modal } from "antd";

export function BasicModal(props) {
  const { show, close, title, size, children } = props;

  return (
    <>
      <Modal
        title={title}
        open={show}
        onCancel={close}
        size={size}
        style={{
          top: 30,
        }}
      >
        {children}
      </Modal>
    </>
  );
}

BasicModal.defaultProps = {
  size: "tiny",
};
