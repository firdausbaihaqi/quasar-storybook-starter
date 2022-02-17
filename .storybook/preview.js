import { app } from '@storybook/vue3';
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

app.use(Quasar)

export const decorators = [(story) => ({
  components: { story },
  template: '<div style="margin: 3em;"><story /></div>'
})];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}