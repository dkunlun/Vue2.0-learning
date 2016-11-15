import Vue from 'vue';
import Vuex from 'vuex'
import Foo from './Foo.vue';
import First from './First.vue';
import Second from './Second.vue';
import VueRouter from 'vue-router';
import Counter from './vue-counter/counter.vue';
import { note } from './vue-note/vuex/store'
import { counter } from './vue-counter/vuex/store'
import App from './vue-note/components/app.vue'
import VueResource from 'vue-resource';
import list from './component/list/List.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [
		{ path: '/second', component: Second },
		{ path: '/first', component: First },
		{ path: '/count', component: Counter },
		{ path: '/list', component: list },
		{ path: '/note', component: App }
	]
});

const store = new Vuex.Store({
	modules: {
		note: note,
		counter: counter
	}
})

new Vue({
	el: '#app',
	store,
	router: router,
	render: h => h(Foo)
});