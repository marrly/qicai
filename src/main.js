/*
 * @Author: MoZhuangRu
 * @Date: 2021-01-14 12:54:39
 * @LastEditors: MoZhuangRu
 * @LastEditTime: 2021-01-14 13:01:20
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
