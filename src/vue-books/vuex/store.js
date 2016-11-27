import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import _ from 'lodash'
import * as type from './mutation-types'

Vue.use(Vuex);

const state = {
	list: []
}

const getters = {
	bookList: state => state.list
}

const mutations = {
	[type.GET_LIST] (state, data) {
		state.list = _.uniqBy(state.list.concat(data), 'id');
	},
	[type.SEARCH_BOOK] (state, data) {
		state.list =data;
	}
}

const moduleBook = {
	state: state,
	mutations: mutations,
	getters: getters,
	actions: actions
}

export { moduleBook as book }