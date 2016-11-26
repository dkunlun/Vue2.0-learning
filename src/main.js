import Vue from 'vue';
import Vuex from 'vuex'
import Main from './main.vue';
import Shopcart from './vue-shopcart/shopcart.vue';
import Second from './Second.vue';
import VueRouter from 'vue-router';
import Counter from './vue-counter/counter.vue';
import { note } from './vue-note/vuex/store'
import { counter } from './vue-counter/vuex/store'
import { shopcart } from './vue-shopcart/vuex/store'
import { book } from './vue-books/vuex/store'
import App from './vue-note/components/app.vue'
import VueResource from 'vue-resource';
import list from './component/list/List.vue';
import draggable from './vue-draggable/draggable.vue';
import Book from './vue-books/book.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [
		{ path: '/second', component: Second },
		{ path: '/shopcart', component: Shopcart },
		{ path: '/count', component: Counter },
		{ path: '/list', component: list },
		{ path: '/note', component: App },
		{ path: '/draggable', component: draggable },
		{ path: '/book', component: Book },
	]
});

const store = new Vuex.Store({
	modules: {
		note: note,
		counter: counter,
		shopcart: shopcart,
		book: book
	}
})

new Vue({
	el: '#app',
	store,
	router: router,
	render: h => h(Main)
});