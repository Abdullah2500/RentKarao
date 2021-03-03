import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./menu.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SafetyCertificateOutlined,
  UserAddOutlined,
  UserOutlined,
  UserDeleteOutlined,
  ManOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
// import {BrowserRouter, Route, Switch} from "react-router-dom";

const Menuu = () => {
  // state = {
  //   current: "mail",
  // };

  // const handleClick = (e) => {
  //   console.log("click ", e);
  //   this.setState({ current: e.key });
  // };

 
    // const { current } = this.state;
    return (
      <Menu
        // onClick={handleClick}
        // selectedKeys={[current]}
        mode="horizontal"
      >

        <Menu.Item key="places" icon={<AppstoreOutlined />}>
          <Link to="/places">Places to Stay</Link>
        </Menu.Item>

        <Menu.Item key="experiences" icon={<SafetyCertificateOutlined />}>
          <Link to="/experiences">Experiences</Link>
        </Menu.Item>

        <Menu.Item
          key="signout"
          icon={<UserDeleteOutlined />}
          className="RightMenu"
        >
          <Link to="/signout">Sign Out</Link>
        </Menu.Item>

        <Menu.Item key="signup" icon={<UserOutlined />} className="RightMenu">
          <Link to="/signup">Sign Up</Link>
        </Menu.Item>

        <Menu.Item
          key="signin"
          icon={<UserAddOutlined />}
          className="RightMenu"
        >
          <Link to="/signin">Sign In</Link>
        </Menu.Item>

        <Menu.Item key="provider" icon={<ManOutlined />} className="RightMenu">
         
            <Link to="/provider">Become a Provider</Link>
         
        </Menu.Item>
      </Menu>
    );
  }

export default Menuu;
