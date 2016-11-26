import Vue from 'vue'
import * as type from './mutation-types'

const getBookList = ({ commit }) => {
	Vue.http.get('src/vue-shopcart/list.json', {
		params: {
			page: 1,
			limit: 10
		}
	}).then((response) => {
		commit(type.GET_LIST, response.body.data);
	});
}

const searchBook = ({ commit }, query) => {
	Vue.http.jsonp('https://api.douban.com/v2/book/search', {
		params: {
			q: query
		}
	}).then((response) => {
		commit(type.SEARCH_BOOK, response.body.data);
	});
}

export {
	getBookList,
	searchBook
}