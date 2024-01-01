import commonEN from '@public/en/common.json'
import commonFR from '@public/fr/common.json'

declare module 'react-18next' {
  interface Resources {
    common: typeof commonEN & typeof commonFR
  }
}
