import Vue from 'vue';

const getGoodsList = ({ commit }) => {
	Vue.http.get('./list', {
		params: {
			page: 1,
			limit: 10
		}
	}).then((response) => {
		commit('getGoodsList', response.body.data);
	});
}

export {
	getGoodsList
}