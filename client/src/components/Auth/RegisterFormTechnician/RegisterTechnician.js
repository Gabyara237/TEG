import React from "react";
import { Auth } from "../../../api";

import "./RegisterTechnician.scss";
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
} from "antd";
const { Option } = Select;
const country = [
  {
    value: "venezuela",
    label: "Venezuela",
  },
  {
    value: "colombia",
    label: "Colombia",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const authController = new Auth();

export function RegisterTechnician() {
  const [form] = Form.useForm();

  //Función que me permite guardar los datos si todo se encuentra correctamente sino manda un mensaje de error
  const onFinish = async (values) => {
    try {
      await authController.register(values);
    } catch (error) {
      console.error(Error);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Row className="tec">
        <Col>otra</Col>
        <Col className="formRegisterTechinician">
          <h1 className="title"> Log in to your account</h1>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "86",
            }}
            scrollToFirstError
            layout="inline"
            className="form"
          >
            <Form.Item
              name="firstname"
              label="Firstname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your Firstname!",
                  whitespace: true,
                },
              ]}
              className="itemFormTechnician"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="lastname"
              label="Lastname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your Lastname!",
                  whitespace: true,
                },
              ]}
              className="itemFormTechnician"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your country of residence!",
                },
              ]}
              className="itemFormTechnician"
            >
              <Cascader options={country} />
            </Form.Item>
            <Form.Item
              name="state"
              label="State"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your state of residence!",
                },
              ]}
              className="itemFormTechnician"
            >
              <Cascader options={country} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
              className="itemFormTechnician"
            >
              <Input
                type="number"
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              className="itemFormTechnician"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
              className="itemFormTechnician"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              className="itemFormTechnician"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="expertise"
              label="What type(s) of work do you have experience in?"
              className="itemFormTechnician"
            >
              <Checkbox.Group>
                <Row className="positionc">
                  <Col span={8}>
                    <Checkbox
                      value="Structured cabling"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Structured cabling
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="Alarm & Security"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Alarm & Security
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="Networking"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Networking
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="Telecom"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Telecom
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="General IT"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      General IT
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="Computer, print & storage"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Computer, print & storage
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item className="itemFormTechnician"></Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              label="Terms of Service"
              rules={[
                {
                  required: true,
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
              className="itemFormTechnician"
            >
              <Checkbox>
                I have read the <a href="http//#">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item className="itemFormTechnician"></Form.Item>
            <Form.Item {...tailFormItemLayout} className="itemFormTechnician">
              <Button type="primary" className="position" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <Form.Item className="itemFormTechnician"></Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
