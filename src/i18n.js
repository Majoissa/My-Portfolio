import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es", "ca"],
    fallbackLng: "en",
    detection: {
      order: ["querystring", "cookie", "localStorage", "path", "navigator"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // ruta de los archivos de idiomas
    },
    react: { useSuspense: false },
  });

export default i18n;
