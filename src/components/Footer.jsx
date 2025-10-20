import React from 'react';
import { FacebookFilled, LinkedinFilled, InstagramFilled, ArrowUpOutlined } from '@ant-design/icons';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from "../assets/img/logo.svg"; 

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-3">
            <img src={logo} alt="URElocation" className="w-auto h-30" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">{t("footer.main_menu")}</h4>
          <ul className="space-y-2 text-[15px] text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.home")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.services")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.blog")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">{t("footer.address_title")}</h4>
          <p className="text-[15px] text-gray-300 leading-relaxed">
            {t("footer.address_text")}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">{t("footer.follow_us")}</h4>
          <div className="flex space-x-5 text-[20px]">
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><LinkedinFilled /></a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><FacebookFilled /></a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><InstagramFilled /></a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTelegramPlane /></a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#1F2937] hover:bg-[#374151] text-white p-3 rounded-full shadow-md transition"
        aria-label="Scroll to top"
      >
        <ArrowUpOutlined style={{ fontSize: '18px' }} />
      </button>
    </footer>
  );
};

export default Footer;

  
