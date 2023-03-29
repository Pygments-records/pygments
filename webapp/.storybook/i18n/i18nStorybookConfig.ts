import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Fetch from "i18next-fetch-backend";
import { defaultLocale } from "../../src/core/i18n/i18nConfig";




// @ts-ignore
i18n
  .use(Fetch)
  .use(initReactI18next)
  .init({
    ns: ["common"],
    defaultNS: ["common"],
    fallbackLng: defaultLocale,
    debug: true,
  });

export default i18n;
