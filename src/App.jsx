import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import VisaSection from "./components/VisaSection";
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsEng from './locale/translationsEng';
import translationsUz from './locale/translationUz';
import translationsRu from './locale/translationRu';

// 🔧 i18n sozlamalari
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEng },
      uz: { translation: translationsUz },
      ru: { translation: translationsRu },
    },
    lng: 'en',          // boshlang‘ich til
    fallbackLng: 'en',  // agar topilmasa shu ishlaydi
    interpolation: {
      escapeValue: false, // React avtomatik xavfsiz qiladi
    },
  });

const App = () => {
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header changeLang={changeLang} />
      <HomePage />
      <VisaSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;



