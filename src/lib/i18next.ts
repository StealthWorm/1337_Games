import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_de from "../translations/de/common.json";
import common_en from "../translations/en/common.json";
import header_de from "../translations/de/header.json";
import header_en from "../translations/en/header.json";
import footer_de from "../translations/de/footer.json";
import footer_en from "../translations/en/footer.json";

const resources = {
  en: {
    common: common_en,
    header: header_en,
    footer: footer_en,
  },
  de: {
    common: common_de,
    header: header_de,
    footer: footer_de,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  preload: true,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;