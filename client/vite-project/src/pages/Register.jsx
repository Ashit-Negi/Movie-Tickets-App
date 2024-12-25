import React from "react";
import { Form, Button, Input, message} from "antd";
import { LockOutlined, UserOutlined , MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RegisterUser } from "../apicalls/userCall";

function Register() {
  const submitForm = async (value)=>{
    try {
       const res = await RegisterUser(value)
       if(res.success){
        message.success(res.message)
       }else{
        message.error(res.message)
       }
       console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="login-container">
      <h2>Register To BookMyShow </h2>
      <Form 
        name="Register"
        initialValues={{
          remember: true,
        }}  // this is to set the default value to empty otherwise it will show the value of the previous one
        style={{
          maxWidth: 360,
        }}
        onFinish={submitForm}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
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
            Sign up
          </Button>
          Already a user? <Link to="/login">login</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
