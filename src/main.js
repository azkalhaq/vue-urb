// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {
  Vuetify,
  VAlert,
  VApp,
  VAvatar,
  VBadge,
  VBottomNav,
  VBottomSheet,
  VBreadcrumbs,
  VBtn,
  VBtnToggle,
  VCard,
  VCarousel,
  VCheckbox,
  VChip,
  VDataTable,
  VDatePicker,
  VDialog,
  VDivider,
  VExpansionPanel,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VPagination,
  VParallax,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VSelect,
  VSlider,
  VSnackbar,
  VSpeedDial,
  VStepper,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTextField,
  VTimePicker,
  VToolbar,
  VTooltip,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    accent: '#EF6C00'
  },
  components: {
    Vuetify,
    VAlert,
    VApp,
    VAvatar,
    VBadge,
    VBottomNav,
    VBottomSheet,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCarousel,
    VCheckbox,
    VChip,
    VDataTable,
    VDatePicker,
    VDialog,
    VDivider,
    VExpansionPanel,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VPagination,
    VParallax,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VSelect,
    VSlider,
    VSnackbar,
    VSpeedDial,
    VStepper,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTextField,
    VTimePicker,
    VToolbar,
    VTooltip,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
