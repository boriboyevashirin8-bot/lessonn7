import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import logo from "../assets/img/logo.svg";
import { CheckCircleOutlined } from "@ant-design/icons";

const Header = () => {
  const menu = (
    <Menu
      items={[
        { key: "1", label: <a href="#">Visa Assistance</a> },
        { key: "2", label: <a href="#">Relocation Packages</a> },
        { key: "3", label: <a href="#">Work Permits</a> },
      ]}
    />
  );

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-18 w-auto" />
          
        </div>

        <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition">
            Home
          </a>

          <Dropdown overlay={menu} trigger={["hover"]}>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              Services <DownOutlined className="text-[10px]" />
            </a>
          </Dropdown>

          <a href="#" className="hover:text-green-600 transition">
            Blog
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Contact
          </a>
        </nav>

        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<CheckCircleOutlined />} 
          className="!bg-green-500 !hover:bg-green-600 border-none text-white font-medium px-6 hidden md:inline-flex"
        >
          Take a scoring test
        </Button>

        <div className="md:hidden cursor-pointer flex flex-col gap-1">
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

