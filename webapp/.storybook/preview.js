import * as nextImage from "next/image";
import { withI18next } from "./i18n/withI18n";
import {defaultLocale} from '../src/core/i18n/i18nConfig'
/*
 * TODO: Remove the override when this issue is resolved
 * @see https://github.com/vercel/next.js/issues/18393
 */
const OriginalNextImage = nextImage.default;
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized={true} />,
});

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: defaultLocale,
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English-US" },
        { value: "fr", right: "🇫🇷", title: "Français" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    locale: defaultLocale,
  },
};

export const decorators = [withI18next];

