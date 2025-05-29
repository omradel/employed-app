import { createI18n } from "vue-i18n";

import ar from "./locales/ar";
import en from "./locales/en";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("preferred-language") || "ar",
  fallbackLocale: localStorage.getItem("preferred-language") || "ar",
  messages: {
    en,
    ar,
  },
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});

export default i18n;
