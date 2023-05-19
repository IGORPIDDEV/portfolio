import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaultColors from '@/assets/scss/base/_colors.module.scss'
import '@mdi/font/css/materialdesignicons.css'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: defaultColors.pp1,
    secondary: defaultColors.pp2,
    'secondary-darken-1': defaultColors.pp2,
    default: defaultColors.pp3
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
