import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Ticket } from "../../../api";
import { useAuth } from "../../../hooks";
import { AvatarUpdate } from "../../Engineers/EditEngineer/AvatarUpdate";
import { Alert, Snackbar } from "@mui/material";

const ticketController = new Ticket();

export function FormCreateTicket(props) {
  const { close, onReload } = props;
  const { accessToken } = useAuth();
  const [open, setOpen] = useState(false);

  const layout = {
    labelCol: {},
    wrapperCol: {},
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /* eslint-enable no-template-curly-in-string */
  function MySnackbar() {
    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity="success">
          Country successfully deleted!
        </Alert>
      </Snackbar>
    );
  }
  const onFinish = (values) => {
    ticketController.createTicket(accessToken, values.ticket, "country");
    console.log(values.ticket);
    onReload();
    close();
  };
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        className="formUpdateEnginner"
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: 500,
        }}
        validateMessages={validateMessages}
      >
        <div className="form_Create">
          <div className="groupItem">
            <Form.Item
              name={["ticket", "title"]}
              label="Title"
              className="formItem"
            >
              <Input placeholder="Peru" />
            </Form.Item>
            <div>
              <Form.Item
                name={["ticket", "priority"]}
                label="Priority"
                className="formItem"
              >
                <Input placeholder="Peru" />
              </Form.Item>
              <Form.Item
                name={["ticket", "description"]}
                label="Description"
                className="formItem"
              >
                <Input placeholder="annabecj903" />
              </Form.Item>
            </div>
            {/* <div>
              <Form.Item
                name={["user", "country"]}
                className="formItem"
                label="Country"
              >
                <Input placeholder="Peru" />
              </Form.Item>

              <Form.Item
                name={["user", "city"]}
                className="formItem"
                label="City"
              >
                <Input placeholder="Lima " />
              </Form.Item>
            </div> */}
          </div>
          {/* Contact Details
          <div className="groupItem">
            <Form.Item
              name={["user", "firstname"]}
              label="First Name - Contact"
              className="formItem2"
            >
              <Input placeholder="annabecj903" />
            </Form.Item>
            <Form.Item
              name={["user", "lastname"]}
              label="Last Name - Contact"
              className="formItem2"
            >
              <Input placeholder="annabecj903" />
            </Form.Item>
          </div>
          <div className="groupItem">
            <Form.Item
              name={["user", "email"]}
              className="formItem2"
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input placeholder="annabecj903@gmail.com" />
            </Form.Item>

            <Form.Item
              name={["user", "phonenumber"]}
              className="formItem2"
              label="Phone"
            >
              <Input placeholder="+1 493 3838" />
            </Form.Item>
          </div> */}
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
            }}
            className="ButtonSubmit"
          >
            <Button type="primary" htmlType="submit">
              Create new Ticket
            </Button>
          </Form.Item>
        </div>
      </Form>
      <MySnackbar />
    </>
  );
}
