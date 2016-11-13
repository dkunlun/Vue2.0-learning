import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);


const state = {
	count: 0,
	list: []
};

const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	},
	pushList(state, data) {
		state.list = _.uniqBy(state.list.concat(data), 'id');
	}
};



const actions = {
	increment: ({ commit }) => commit('increment'),
	decrement: ({ commit }) => commit('decrement'),
	incrementIfOdd({ commit, state }) {
		if((state.count + 1) % 2 === 0) {
			commit('increment');
		}
	},
	incrementAsync({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('increment');
				resolve();
			}, 1000);
		});
	},
	getList({ commit }) {
		Vue.http.get('http://www.vue-js.com/api/v1/topics', {
			params: {
				page: 1,
				limit: 10
			}
		}).then((response) => {
			commit('pushList', response.body.data);
		});
	}
};

const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
	count: state => state.count,
	list: state => state.list
};
const moduleCounter = {
	state: state,
	actions: actions,
	mutations: mutations,
	getters: getters
}
export { moduleCounter as counter }
