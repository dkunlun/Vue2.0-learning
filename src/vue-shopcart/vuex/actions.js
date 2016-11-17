import Vue from 'vue'
import * as type from './mutation-types'

const getShopCartList = ({ commit }) => {
	Vue.http.get('src/vue-shopcart/list.json', {
		params: {
			page: 1,
			limit: 10
		}
	}).then((response) => {
		commit(type.GET_LIST, response.body.data);
	});
}

export {
	getShopCartList
}