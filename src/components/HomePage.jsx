import React from "react";
import { Button } from "antd";
import Group from "../assets/img/Group.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import watch from "../assets/img/watch.png";
import grl from "../assets/img/grl.png";
import boygrl from "../assets/img/boygrl.png";
import dev from '../assets/img/dev.png';
import an from '../assets/img/an.png';
import ui from '../assets/img/ui.png';
import gra from '../assets/img/gra.png'

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            One platform meeting{" "}
            <span className="text-[#5EB083]">all your relocation</span> needs
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            Get a Global Talent Visa and relocate to the UK. <br />
            Start your journey now.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<CheckCircleOutlined />}
              className="!bg-gradient-to-r !from-orange-400 !to-orange-500 !border-none text-white shadow-md hover:!opacity-90 transition-all duration-300"
            >
              Take a scoring test
            </Button>

            <p className="text-gray-400 text-sm max-w-xs text-center sm:text-left">
              Evaluate your chances and get detailed <br /> feedback from our
              team
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={Group}
            alt="Traveler illustration"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col mb-20">
          <h2 className="text-5xl font-semibold text-gray-800">
            Immigration made easy
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl">
            Urelocation simplifies the visa process for you and your
            international employees. <br /> We’ll handle the fine details so you
            can focus on other tasks.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Fast Service
              </h3>
              <p className="text-gray-500 leading-relaxed">
                We research, build, submit, and get approved visas in a fraction{" "}
                <br />
                of the time while working around your timelines.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={watch}
                alt="Fast Service"
                className="w-72 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Full control and visibility
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Our intuitive platform guides you and your employee through{" "}
                <br />
                every step of the immigration process, with at-a-glance status{" "}
                <br />
                updates along the way.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={grl}
                alt="Full Control"
                className="w-72 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personalized case managers
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Feel confident with our team of global mobility experts. They’re{" "}
                <br />
                on hand to answer all your questions, letting you focus on what{" "}
                <br />
                really matters.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={boygrl}
                alt="Case Managers"
                className="w-72 h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-6 py-24">
  <div className="flex flex-col items-center text-center mb-20">
    <h2 className="text-4xl font-semibold text-gray-800 leading-snug">
      Who has relocated with the help <br /> of Immigram?
    </h2>
    <p className="text-gray-500 mt-4 max-w-2xl">
      You can be next! Start your relocation journey now
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
    <div className="bg-white w-full max-w-xs rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="bg-gradient-to-br from-green-50 to-white flex justify-center items-center py-14">
        <img src={dev} alt="Developer" className="w-40 h-40 object-contain" />
      </div>
      <div className="px-6 py-6 text-center">
        <p className="text-gray-600 font-medium text-base">Developer</p>
      </div>
    </div>

    <div className="bg-white w-full max-w-xs rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="bg-gradient-to-br from-orange-50 to-white flex justify-center items-center py-14">
        <img src={an} alt="Data Scientist" className="w-40 h-40 object-contain" />
      </div>
      <div className="px-6 py-6 text-center">
        <p className="text-gray-600 font-medium text-base">Data Scientist</p>
      </div>
    </div>

    <div className="bg-white w-full max-w-xs rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="bg-gradient-to-br from-blue-50 to-white flex justify-center items-center py-14">
        <img src={ui} alt="UI Designer" className="w-40 h-40 object-contain" />
      </div>
      <div className="px-6 py-6 text-center">
        <p className="text-gray-600 font-medium text-base">UI Designer</p>
      </div>
    </div>

    <div className="bg-white w-full max-w-xs rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="bg-gradient-to-br from-purple-50 to-white flex justify-center items-center py-14">
        <img src={gra} alt="Game Developer" className="w-40 h-40 object-contain" />
      </div>
      <div className="px-6 py-6 text-center">
        <p className="text-gray-600 font-medium text-base">Game Developer</p>
      </div>
    </div>
  </div>
</section>

      </section>
    </div>
  );
};

export default HomePage;
