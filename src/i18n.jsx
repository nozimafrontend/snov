import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import trassEng from "./traslet/Eng.json";
import trassUz from "./traslet/Uz.json";

const resources = {
    // en: {
    //    translation: trassEng
    // },
    uz: {
       translation: trassUz
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uz",
        fallbackLng: "uz",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;