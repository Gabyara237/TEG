import React from "react";
import "./Login.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Auth } from "../../../api";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const authController = new Auth();

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await authController.login(values);

      authController.setAccessToken(response.access);
      authController.setRefreshToken(response.refresh);

      login(response.access);
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className="title"> Log in to your account</h1>
      <Form.Item
        className="item"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        className="item"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className="item">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="http//#">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item className="item">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="http//#">Sign up for a free account</a>
      </Form.Item>
    </Form>
  );
}
