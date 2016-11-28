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
import list from './components/list/List.vue';
import draggable from './vue-draggable/draggable.vue';
import Book from './vue-books/book.vue';
import detailBook from './vue-books/component/detailBook.vue';
import Menu from './components/menu/menu.vue';
import 'muse-ui/dist/muse-ui.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Menu.name, Menu);

const router = new VueRouter({
	routes: [
		{ path: '/second', name: 'second', component: Second },
		{ path: '/shopcart', name: 'shopcart', component: Shopcart },
		{ path: '/count', name: 'count', component: Counter },
		{ path: '/list', name: 'list', component: list },
		{ path: '/note', name: 'note', component: App },
		{ path: '/draggable', name: 'draggable', component: draggable },
		{ path: '/book', name: 'book', component: Book },
		{ path: '/book/detail/:id', name: 'detailBook', component: detailBook },
	]
});

Vue.http.interceptors.push((request, next) => {
	
	next((response) => {
		loadingInstance.close();
		// 请求发送后的处理逻辑
		// ...
		// 根据请求的状态，response参数会返回给successCallback或errorCallback
		return response
	})
})

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
	render: h => h(Menu)
});