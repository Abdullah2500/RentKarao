import { Form, Input, InputNumber, Button, Checkbox, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
import Signin from '../signin/Signin';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};
/* eslint-enable no-template-curly-in-string */

const Signup = () => {

  const onFinish = (values) => {
    console.log(values);

    axios.post('http://localhost:3000/users/register', {
      name: values.name,
      email: values.email,
      student_id: values.student_id,
      password: values.password
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("User Signed Up Successfully! Go to Sign in Page");
        }
        // else {
        //   alert("User registered with the email already!");
        // }

      }, (error) => {
        console.log(error);
        alert("User already Signed Up");
      });
  };

  return (

    <Row>
      <Col span={8} offset={7}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{ remember: true }}
        >
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 13 }}
          >
            <h1>Sign Up</h1>
          </Form.Item>
          <Form.Item
            name='name'
            label="Name"
            rules={[
              {
                required: true,
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label="Email"
            rules={[
              {
                type: 'email',
                required: true
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='student_id'
            label="Student ID"
            rules={[
              {
                type: 'number',
                required: true
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} name="remember" valuePropName="checked">
            <Checkbox name="remember">Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;