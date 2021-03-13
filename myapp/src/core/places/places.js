import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './places.css';
import { Form, Input, Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const Places = () => {

  const formRef = React.createRef();

  const onDateInChange = (date, dateString) => {
    console.log(date, dateString);
  }

  const onDateOutChange = (date, dateString) => {
    console.log(date, dateString);
  }

  const handleSubmit = () => {
    console.log("Homepage Search is Submitted. ")
  }

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="background">

      <Form
        layout="inline"
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        className="formStyle"
      >
        <Form.Item
          name="location"
          label="Location: "
        >
          <Input placeholder="Where are you going?" />
        </Form.Item>

        <Form.Item label="Check in">
          <DatePicker onChange={onDateInChange} />
        </Form.Item>

        <Form.Item label="Check out">
          <DatePicker onChange={onDateOutChange} />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />} onSubmit={handleSubmit}>
            Submit
            </Button>
        </Form.Item>
      </Form>
    </div>

  );
}

export default Places;