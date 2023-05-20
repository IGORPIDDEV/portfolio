import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaultColors from '@/assets/scss/base/_colors.module.scss'
import '@mdi/font/css/materialdesignicons.css'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: defaultColors.portfolio_primary,
    secondary: defaultColors.portfolio_secondary,
    default: defaultColors.portfolio_default
  }
}

export default createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'md'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light
    }
  }
})
