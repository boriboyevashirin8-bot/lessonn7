import React from "react";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import Group from "../assets/img/Group.png";
import watch from "../assets/img/watch.png";
import grl from "../assets/img/grl.png";
import boygrl from "../assets/img/boygrl.png";
import dev from "../assets/img/dev.png";
import an from "../assets/img/an.png";
import ui from "../assets/img/ui.png";
import gra from "../assets/img/gra.png";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            {t("hero_title")}{" "}
            <span className="text-[#5EB083]">{t("hero_highlight")}</span>
          </h1>
          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            {t("hero_subtext")}
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<CheckCircleOutlined />}
              className="!bg-gradient-to-r !from-orange-400 !to-orange-500 !border-none text-white shadow-md hover:!opacity-90 transition-all duration-300"
            >
              {t("takeTest")}
            </Button>

            <p className="text-gray-400 text-sm sm:text-base max-w-xs text-center sm:text-left">
              {t("hero_note")}
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Group}
            alt="Traveler illustration"
            className="w-72 sm:w-96 md:w-[420px] h-auto object-contain"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
            {t("immigration_title")}
          </h2>
          <p className="text-gray-500 mt-4 md:mt-6 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            {t("immigration_text")}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t("fast_service_title")}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t("fast_service_text")}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={watch}
                alt="Fast Service"
                className="w-60 sm:w-72 md:w-80 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t("full_control_title")}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t("full_control_text")}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={grl}
                alt="Full Control"
                className="w-60 sm:w-72 md:w-80 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t("case_manager_title")}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t("case_manager_text")}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={boygrl}
                alt="Case Managers"
                className="w-60 sm:w-72 md:w-80 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-snug">
            {t("relocated_title")}
          </h2>
          <p className="text-gray-500 mt-4 md:mt-6 max-w-2xl text-base sm:text-lg">
            {t("relocated_text")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 place-items-center">
          {[
            { img: dev, text: t("role_developer"), gradient: "from-green-50" },
            { img: an, text: t("role_data"), gradient: "from-orange-50" },
            { img: ui, text: t("role_ui"), gradient: "from-blue-50" },
            { img: gra, text: t("role_game"), gradient: "from-purple-50" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white w-full max-w-xs rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`bg-gradient-to-br ${item.gradient} to-white flex justify-center items-center py-10 sm:py-14`}
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-32 sm:w-40 h-32 sm:h-40 object-contain"
                />
              </div>
              <div className="px-6 py-6 text-center">
                <p className="text-gray-600 font-medium text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;

