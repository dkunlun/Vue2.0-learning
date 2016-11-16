import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import _ from 'lodash';

Vue.use(Vuex);

const state = {
	goodsList: []
}

const getters = {
	goodsList: state => state.goodsList
}

const mutations = {
	getGoodsList (state, data) {
		state.goodsList = _.uniqBy(state.goodsList.concat(data), 'id');
	}
}

const moduleShopcart = {
	state: state,
	mutations: mutations,
	getters: getters,
	actions: actions
}

export { moduleShopcart as shopcart }