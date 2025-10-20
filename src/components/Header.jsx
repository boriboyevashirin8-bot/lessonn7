import React, { useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import {
  DownOutlined,
  CheckCircleOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logo from "../assets/img/logo.svg";
import { useTranslation } from "react-i18next";

const Header = ({ changeLang }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  const menu = (
    <Menu
      items={[
        { key: "1", label: <a href="#">{t("visaAssistance")}</a> },
        { key: "2", label: <a href="#">{t("relocationPackages")}</a> },
        { key: "3", label: <a href="#">{t("workPermits")}</a> },
      ]}
    />
  );

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <a
            href="#"
            className="text-green-600 font-semibold hover:text-green-700 transition"
          >
            {t("home")}
          </a>

          <Dropdown overlay={menu} trigger={["hover"]}>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-green-600 transition"
            >
              {t("services")} <DownOutlined className="text-[10px]" />
            </a>
          </Dropdown>

          <a href="#" className="hover:text-green-600 transition">
            {t("blog")}
          </a>
          <a href="#" className="hover:text-green-600 transition">
            {t("contact")}
          </a>

          <select
            onChange={changeLangHandler}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </nav>

        <div className="hidden md:inline-flex">
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<CheckCircleOutlined />}
            className="!bg-green-500 !hover:bg-green-600 border-none text-white font-medium px-6"
          >
            {t("takeTest")}
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t shadow-inner transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
          <a href="#" className="text-green-600 font-semibold">
            {t("home")}
          </a>

          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-green-600 transition"
            >
              {t("services")} <DownOutlined className="text-[10px]" />
            </a>
          </Dropdown>

          <a href="#" className="hover:text-green-600">
            {t("blog")}
          </a>
          <a href="#" className="hover:text-green-600">
            {t("contact")}
          </a>

          <select
            onChange={changeLangHandler}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>

          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<CheckCircleOutlined />}
            className="bg-green-500 hover:bg-green-600 border-none text-white font-medium px-6"
          >
            {t("takeTest")}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;



