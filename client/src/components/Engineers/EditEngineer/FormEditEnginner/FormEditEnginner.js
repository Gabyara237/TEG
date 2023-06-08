import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./FormEditEnginner.scss";
import { FileUpdate } from "../FileUpdate";
import { AvatarUpdate } from "../AvatarUpdate";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";

const userController = new User();

export default function FormEditEnginner(props) {
  const { accessToken } = useAuth();
  const { user } = props;
  const [reload, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    userController.updateUser(accessToken, user._id, values.user);
    onReload();
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      className="formUpdateEnginner"
      layout="horizontal"
      onFinish={onFinish}
      initialValues={{
        user: user.username,
        phone: user.phonenumber,
      }}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "Avatar"]}
        value="hola"
        label="Avatar"
        className="formItem"
      >
        <AvatarUpdate />
      </Form.Item>

      <Form.Item name={["user", "name"]} label="Username" className="formItem">
        <Input placeholder={user.username} />
      </Form.Item>
      <Form.Item name={["user", "phone"]} className="formItem" label="Phone">
        <Input placeholder={user.phonenumber} />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        className="formItem"
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input placeholder={user.email} />
      </Form.Item>

      <Form.Item
        name={["user", "cityCountry"]}
        className="formItem"
        label="City | Country"
      >
        <Input placeholder={user.country} />
      </Form.Item>
      <div className="updates">
        <Form.Item label="CV" className="formItem">
          <FileUpdate />
        </Form.Item>

        <Form.Item
          name={["user", "NationalID"]}
          valuePropName="fileList"
          getValueFromEvent={normFile}
          label="National ID"
          className="formItem"
        >
          <FileUpdate />
        </Form.Item>
        <Form.Item label="Certifications" className="formItem">
          <FileUpdate />
        </Form.Item>

        <Form.Item label="Insurance" className="formItem">
          <FileUpdate />
        </Form.Item>
        <Form.Item label="Work authorization" className="formItem">
          <FileUpdate />
        </Form.Item>
      </div>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
        }}
        className="ButtonSubmit"
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
