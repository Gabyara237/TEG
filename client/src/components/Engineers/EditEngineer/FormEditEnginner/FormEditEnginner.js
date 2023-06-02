import React from "react";
import { Button, Form, Input } from "antd";
import "./FormEditEnginner.scss";
import { FileUpdate } from "../FileUpdate";
import { AvatarUpdate } from "../AvatarUpdate";

export default function FormEditEnginner() {
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
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      className="formUpdateEnginner"
      layout="horizontal"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item name={["user", "Avatar"]} label="Avatar" className="formItem">
        <AvatarUpdate />
      </Form.Item>

      <Form.Item name={["user", "name"]} label="Username" className="formItem">
        <Input placeholder="annabecj903" />
      </Form.Item>
      <Form.Item name={["user", "phone"]} className="formItem" label="Phone">
        <Input placeholder="+1 493 3838" />
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
        <Input placeholder="annabecj903@gmail.com" />
      </Form.Item>

      <Form.Item
        name={["user", "cityCountry"]}
        className="formItem"
        label="City | Country"
      >
        <Input placeholder="Lima | Peru" />
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
