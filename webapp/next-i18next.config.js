const { defaultLocale, supportedLocale } = require("./src/core/i18n/i18nConfig");
const path = require("path");

module.exports = {
  i18n: {
    debug: false,
    defaultLocale,
    locales: supportedLocale,
    localePath: path.resolve("./public/locales"),
  },
};
