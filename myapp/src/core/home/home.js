import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './home.css';
import { Form, Input, Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


class Home extends React.Component {

    formRef = React.createRef();

    onDateInChange = (date, dateString) => {
        console.log(date, dateString);
      }

    onDateOutChange = (date, dateString) => {
        console.log(date, dateString);
      } 

    handleSubmit = () => {
        console.log("Homepage Search is Submitted. ")
    }
  
    onFinish = (values) => {
      console.log(values);
    };

    render() {
        
    return (
      
        <Form 
        layout="inline" 
        ref={this.formRef} 
        name="control-ref" 
        onFinish={this.onFinish}
        id="form_pad"
        >
        <Form.Item 
          name="location"
          label="Location: "
         >
          <Input id="form_loc_input" placeholder="Where are you going?"/>
        </Form.Item>

	    <Form.Item label="Check in">
            <DatePicker onChange={this.onDataInChange} />
        </Form.Item>

        <Form.Item label="Check out">
            <DatePicker onChange={this.onDateOutChange} />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />} onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>

    );
    }
}

export default Home;