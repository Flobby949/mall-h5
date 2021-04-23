import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import {
  Button, Form, Field, Toast, Grid, GridItem, Icon, Dialog, AddressList, AddressEdit
} from 'vant'
import 'lib-flexible/flexible'

Vue.use(Form).use(Field).use(Toast).use(Button)
  .use(Grid).use(GridItem).use(Icon).use(Dialog)
  .use(AddressList).use(AddressEdit)
Vue.prototype.$md5 = md5
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
