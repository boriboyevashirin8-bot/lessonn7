import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import dashboard from "../assets/img/dashboard.png";

const VisaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-gray-800 px-6 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="mb-16 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {t("visa_title")}
        </h2>
        <p className="text-gray-500 max-w-2xl">{t("visa_subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all">
          <div>
            <h3 className="text-4xl font-bold mb-4">£5,500</h3>
            <ul className="text-gray-600 space-y-3 list-disc list-inside">
              <li>{t("visa_case1_line1")}</li>
              <li>{t("visa_case1_line2")}</li>
              <li>{t("visa_case1_line3")}</li>
            </ul>
          </div>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="!bg-green-500 !hover:bg-green-600 mt-6 self-start"
          >
            {t("choose")}
          </Button>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all">
          <div>
            <h3 className="text-4xl font-bold mb-4">£4,000</h3>
            <ul className="text-gray-600 space-y-3 list-disc list-inside">
              <li>{t("visa_case2_line1")}</li>
              <li>{t("visa_case2_line2")}</li>
              <li>{t("visa_case2_line3")}</li>
            </ul>
          </div>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="!bg-green-500 !hover:bg-green-600 mt-6 self-start"
          >
            {t("choose")}
          </Button>
        </div>
      </div>

      <div className="text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {t("platform_title")}
        </h2>
        <p className="text-gray-500 max-w-3xl">
          {t("platform_subtitle")}
        </p>
      </div>
      <div className="mt-10 text-left">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {t("platform_transparency")}
        </h3>
        <p className="text-gray-500 mb-4">
          {t("platform_overview")}
        </p>
        <div className="flex flex-wrap gap-3">
          {["clear statuses", "timeline", "steps", "progress"].map((label, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="-mx-6 md:-mx-10 mt-10">
        <img
          src={dashboard}
          alt="URElocation dashboard"
          className="w-[100%] h-[100%] rounded-none shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default VisaSection;

