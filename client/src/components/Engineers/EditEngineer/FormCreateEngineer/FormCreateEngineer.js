import React from "react";
import { Button, Form, Input, DatePicker } from "antd";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { AvatarUpdate } from "../AvatarUpdate";

const userController = new User();

export function FormCreateEngineer(props) {
  const { accessToken } = useAuth();
  const { close, onReload } = props;

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

  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    userController.createUser(accessToken, values.user);

    onReload();
    close();
  };
  return (
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
            name={["user", "Avatar"]}
            label="Avatar"
            className="formItem"
          >
            <AvatarUpdate />
          </Form.Item>
          <div>
            <Form.Item
              name={["user", "firstname"]}
              label="First Name"
              className="formItem"
            >
              <Input placeholder="annabecj903" />
            </Form.Item>
            <Form.Item
              name={["user", "username"]}
              label="Username"
              className="formItem"
            >
              <Input placeholder="annabecj903" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name={["user", "lastname"]}
              label="Last Name"
              className="formItem"
            >
              <Input placeholder="annabecj903" />
            </Form.Item>
            <Form.Item
              name={["user", "datebirth"]}
              label="Date of birth"
              className="formItem"
            >
              <DatePicker format="MM-DD-YYYY" />
            </Form.Item>
          </div>
        </div>
        Contact Details
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
        </div>
        <div className="groupItem">
          <Form.Item
            name={["user", "country"]}
            className="formItem2"
            label="Country"
          >
            <Input placeholder="Peru" />
          </Form.Item>

          <Form.Item name={["user", "city"]} className="formItem2" label="City">
            <Input placeholder="Lima " />
          </Form.Item>
        </div>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
          }}
          className="ButtonSubmit"
        >
          <Button type="primary" htmlType="submit">
            Create new engineer
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
