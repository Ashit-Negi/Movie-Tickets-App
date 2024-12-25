import React from "react";
import { Form, Button, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LoginUser } from "../apicalls/userCall";

function Login() {
  const submitForm = async(value)=>{
    try {
      const response = await LoginUser(value)
      if(response.success){
        message.success(response.message)
        // this is for going directly to the home page after login successful
        window.location.href = "/"
      }else{
        message.error(response.message)
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="login-container">
      <h2 >Welcome To BookMyShow</h2>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={submitForm}
      >
         <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          Not Register yet! <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
