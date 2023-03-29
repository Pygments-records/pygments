const { defaultLocale, supportedLocale } = require("./src/core/i18n/i18nConfig");

module.exports = {
  i18n: {
    debug: false,
    defaultLocale,
    locales: supportedLocale,
  },
};
