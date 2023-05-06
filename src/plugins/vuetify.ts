import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaultColors from '@/assets/scss/base/_colors.module.scss'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: defaultColors.pblue,
    secondary: defaultColors.pdark,
    'secondary-darken-1': defaultColors.pblack,
    default: defaultColors.pwhite
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light
    }
  }
})
