import App from './App'
import Vue from 'vue'
import uView from "uview-ui";
import store from "store"

Vue.config.productionTip = false

Vue.use(uView);

Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
