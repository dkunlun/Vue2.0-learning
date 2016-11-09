import Vue from 'vue';
import App from './App.vue';
import Foo from './Foo.vue';
import First from './First.vue';
import Second from './Second.vue';
import VueRouter from 'vue-router';
import Counter from './counter.vue';
import store from './store.js';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [
		{ path: '/second', component: Second },
		{ path: '/first', component: First },
		{ path: '/count', component: Counter }
	]
});
new Vue({
	el: '#app',
	store,
	router: router,
	render: h => h(Foo),
	http: {
	root: '/root',
	headers: {
		Authorization: '22222222'
	}
  }
});
