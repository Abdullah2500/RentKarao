import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import axios from 'axios';

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

const Signin = () => {
  const onFinish = (values) => {
    console.log('Success:', values);

    axios.post('http://localhost:3000/users/login', {
      email: values.email,
      password: values.password
    })
      .then((response) => {
        console.log(response);

      }, (error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={8} offset={7}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 13 }}
          >
            <h1>Sign In</h1>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email'
              },
            ]}
          >
            <Input />
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

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Signin
        </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Signin;